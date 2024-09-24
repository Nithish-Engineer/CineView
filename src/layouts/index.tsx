import React, { ReactNode, useState, useContext, useEffect} from 'react'

import { Main } from '../Styles';
import Sidebar from '../components/sidebar';
import SearchBar from '../pages/home/Search';
import { MovieContext } from '../context';
import { MovieDataType } from '../assets/data';
import { GridContainer, Card } from '../Styles';

interface LayoutProps {
  children: ReactNode
}
function Layout({ children}: LayoutProps) {
  const {state} = useContext(MovieContext);
  const [searching, setSearching] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<MovieDataType[]>();

  const onSearchHandle = (e: string) => {
    const Searchtext: string = e;
    if(e && state.filteredData) {
    setSearching(true);
    setSearchResults(state.filteredData.filter(movie => movie.title.toLowerCase().includes(Searchtext.toLowerCase())))
    }
    else {
      setSearching(false);
      setSearchResults([]);
    }
  }
  useEffect(() => {
    console.log(state)
  }, [state.filteredData]);

  return (
    <Main>
        <Sidebar />
        <div style={{display: 'flex',flexDirection: 'column', width: '100%', height: '100%', overflow: 'auto'}}>
        <SearchBar onchangeHandle={onSearchHandle}/>
        {!searching ? (
          <>
         {children}
          </>
        )
         :
         (
          <div style={{display: 'flex',flexDirection: 'column', width: '100%', height: '100%'}}>
        <h3>🔍 search results...</h3>
             <GridContainer>
      { searchResults?.map(movie => {
        return (
          <Card key={movie.title}>
          <img src={movie.thumbnail.regular.medium} alt={movie.title} />
          <h6>{movie.year}&nbsp;&bull;&nbsp;{movie.category}&nbsp;&bull;&nbsp;{movie.rating}</h6>
          <h4>{movie.title}</h4>
        </Card>
       )
      })}
      {
       (searchResults && searchResults.length===0) && <h3>No results found</h3>
      }
      </GridContainer>
        </div>
      )
    }
         </div>
    </Main>
  )
};

export default Layout