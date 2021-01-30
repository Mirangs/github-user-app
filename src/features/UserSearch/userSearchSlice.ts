import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'

export interface SearchResult {
  id: number
  image: string
  username: string
}

export type SearchResults = SearchResult[]

interface InitialState {
  search: string
  searchResults: SearchResults
  isLoading: boolean
  error: string
}

const initialState: InitialState = {
  search: '',
  searchResults: [],
  isLoading: false,
  error: '',
}

interface GithubSearchUser {
  id: number
  login: string
  avatar_url: string
  url: string
}

interface GithubSearchResponse {
  items: GithubSearchUser[]
}

export const userSearchSlice = createSlice({
  name: 'userSearch',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setSearchResults: (state, action: PayloadAction<SearchResults>) => {
      state.searchResults = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const {
  setSearch,
  setSearchResults,
  setLoading,
  setError,
} = userSearchSlice.actions

export const fetchUsers = (search: string): AppThunk => async (dispatch) => {
  const BASE_URL = 'https://api.github.com'

  dispatch(setLoading(true))
  dispatch(setError(''))
  dispatch(setSearch(search))
  try {
    const res = await fetch(`${BASE_URL}/search/users?q=${search}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    })
    if (res.status === 404) {
      return dispatch(setSearchResults([]))
    }
    const json: GithubSearchResponse = await res.json()
    const usersMapped: SearchResults = await Promise.all(
      json.items.map(async (user) => {
        return {
          id: user.id,
          username: user.login || '',
          image: user.avatar_url || '',
        }
      })
    )
    dispatch(setSearchResults(usersMapped))
  } catch (err) {
    dispatch(setError(err))
  } finally {
    dispatch(setLoading(false))
  }
}

export const userSearchSelector = (state: RootState) => state.userSearch
