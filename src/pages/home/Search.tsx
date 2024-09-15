import React from 'react'

import { Search,SearchIcon } from '../../Styles'


function SearchBar() {
  return (
    <div>
      <Search type="text" name="search" />
      <SearchIcon />
    </div>
  )
}

export default SearchBar