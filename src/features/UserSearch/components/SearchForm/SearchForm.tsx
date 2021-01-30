import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchUsers,
  setSearch,
  userSearchSelector,
} from '../../userSearchSlice'
import useDebounce from '../../../../hooks/useDebounce'
import SearchFormStyles from './SearchForm.style'

const SearchForm = () => {
  const dispatch = useDispatch()
  const { search, isLoading } = useSelector(userSearchSelector)
  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(fetchUsers(debouncedSearch))
    }
  }, [debouncedSearch])

  const onInputChange = (value: string) => {
    dispatch(setSearch(value))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <SearchFormStyles>
      <input
        className="user-search"
        type="text"
        id="search"
        name="search"
        placeholder="Search for Users"
        onChange={({ target: { value } }) => onInputChange(value)}
      />
    </SearchFormStyles>
  )
}

export default SearchForm
