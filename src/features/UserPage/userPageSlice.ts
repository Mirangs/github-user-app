import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/rootReducer'
import { AppThunk } from '../../app/store'

export interface UserRepo {
  name: string
  forksAmount: number
  starsAmount: number
  repoLink: string
}

export interface GithubUser {
  image: string
  username: string
  email: string
  location: string
  joinDate: string
  followersAmount: number
  followingAmount: number
  bio: string
}

interface InitialState {
  isLoading: boolean
  error: string
  search: string
  user: GithubUser
  repos: UserRepo[]
  reposSliced: UserRepo[]
}

const initialState: InitialState = {
  isLoading: false,
  error: '',
  search: '',
  user: {
    image: '',
    email: '',
    username: '',
    location: '',
    joinDate: '',
    followersAmount: 0,
    followingAmount: 0,
    bio: '',
  },
  repos: [],
  reposSliced: [],
}

export const userPageSlice = createSlice({
  name: 'userPage',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<GithubUser>) => {
      state.user = action.payload
    },
    setRepos: (state, action: PayloadAction<UserRepo[]>) => {
      state.repos = action.payload
      state.reposSliced = action.payload
    },
    setReposSlice: (state, action: PayloadAction<UserRepo[]>) => {
      state.reposSliced = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const {
  setUser,
  setRepos,
  setSearch,
  setIsLoading,
  setError,
  setReposSlice,
} = userPageSlice.actions

export const fetchUserData = (username: string): AppThunk => async (
  dispatch
) => {
  dispatch(setIsLoading(true))
  dispatch(setError(''))
  try {
    const BASE_URL = 'https://api.github.com'
    const res = await fetch(`${BASE_URL}/users/${username}`)
    const json = await res.json()
    dispatch(
      setUser({
        image: json.avatar_url,
        email: json.email,
        username: `${json.login} (${json.name})`,
        location: json.location || '-',
        joinDate: json.created_at,
        followersAmount: json.followers || 0,
        followingAmount: json.following || 0,
        bio: json.bio || '-',
      })
    )

    const reposRes = await fetch(json.repos_url)
    const reposJson = await reposRes.json()

    dispatch(
      setRepos(
        reposJson.map((repo: any) => ({
          name: repo.name,
          forksAmount: repo.forks_count,
          starsAmount: repo.stargazers_count,
          repoLink: repo.html_url,
        }))
      )
    )
  } catch (err) {
    dispatch(setError(err))
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const userPageSelector = (state: RootState) => state.userPage
