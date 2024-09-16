import React,  {useEffect, useState} from 'react'

import { Search,SearchIcon } from '../../Styles'

interface SearchBarprops {
   onchangeHandle: (e: string) => void;
}


function SearchBar({onchangeHandle}: SearchBarprops ) {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    onchangeHandle(search);
  },[search])

  return (
    <div>
      <Search type="text" placeholder='search for movie or tv-series' name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <SearchIcon />
    </div>
  )
}

export default SearchBar