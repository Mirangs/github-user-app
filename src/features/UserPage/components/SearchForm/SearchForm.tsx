import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setReposSlice, setSearch, userPageSelector } from '../../userPageSlice'
import useDebounce from '../../../../hooks/useDebounce'
import SearchFormStyles from './SearchForm.style'

const SearchForm = () => {
  const dispatch = useDispatch()
  const { search, repos } = useSelector(userPageSelector)
  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    dispatch(
      setReposSlice(
        debouncedSearch
          ? repos.filter((repo) =>
              repo.name.match(new RegExp(debouncedSearch, 'i'))
            )
          : repos
      )
    )
  }, [debouncedSearch])

  const onInputChange = (value: string) => {
    dispatch(setSearch(value))
  }

  return (
    <SearchFormStyles>
      <input
        className="repo-search"
        type="text"
        id="search"
        name="search"
        placeholder="Search for user repositories"
        onChange={({ target: { value } }) => onInputChange(value)}
      />
    </SearchFormStyles>
  )
}

export default SearchForm
