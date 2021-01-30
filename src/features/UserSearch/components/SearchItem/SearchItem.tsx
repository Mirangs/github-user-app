import React from 'react'
import { Link } from 'react-router-dom'
import { SearchResult } from '../../userSearchSlice'
import SearchItemStyles from './SearchItem.style'

const SearchItem: React.FC<SearchResult> = ({ username, image }) => (
  <SearchItemStyles>
    <Link className="item-link" to={`/${username}`}>
      <img className="item-image" src={image} alt="Github user" />
      <p className="item-name">{username}</p>
    </Link>
  </SearchItemStyles>
)

export default SearchItem
