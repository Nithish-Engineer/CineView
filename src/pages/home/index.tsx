import React, { SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import Layout from '../../layouts'
import SearchBar from './Search'

import { Card, GridContainer } from '../../Styles';
import { MovieContext } from '../../context';
import { MovieDataType } from '../../assets/data';

function Home() {
  const {state} = useContext(MovieContext);
  const [searching, setSearching] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<MovieDataType[]>();
  const handleSearch = (e: string) => {
    const Searchtext: string = e;
    if(e) {
      setSearching(true);
    setSearchResults(state.movies.filter(movie => movie.title.toLowerCase().includes(Searchtext.toLowerCase())))
    }
    else {
      setSearching(false)
      setSearchResults([]);
    }
  }

  // UI  
  return (
    <>
    <Layout >
      <div style={{display: 'flex',flexDirection: 'column', width: '100%', height: '100%'}}>
      <SearchBar  onchangeHandle={handleSearch}/>
      { !searching ?
       (
      <>
        <h2>🔥Trending</h2>
       <GridContainer>
      { state.trendingList?.map(movie => {
        return (
          <Card key={movie.title}>
          <img src={movie.thumbnail.regular.medium} alt={movie.title} />
          <h6>{movie.year}&nbsp;&bull;&nbsp;{movie.category}&nbsp;&bull;&nbsp;{movie.rating}</h6>
          <h4>{movie.title}</h4>
        </Card>
       )
      })}
      </GridContainer>
      <h2>💡Recommended for you</h2>
      <GridContainer>
      { state.recommendedList?.map(movie => { 
        return (
          <Card key={movie.title}>
          <img src={movie.thumbnail.regular.medium} alt={movie.title} />
          <h6>{movie.year}&nbsp;&bull;&nbsp;{movie.category}&nbsp;&bull;&nbsp;{movie.rating}</h6>
          <h4>{movie.title}</h4>
        </Card>
       )
      })}
      </GridContainer>
      </>
      )
      :
      (
        <>
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
        </>
      )
    }
      </div>
        </Layout>
    </>
  )
}

export default Home