import React from 'react'
import Layout from '../../layouts'
import SearchBar from './Search'

import { Card, GridContainer } from '../../Styles';
import { moviesData } from '../../assets/data';

function Home() {

  return (
    <>
    <Layout >
      <div style={{display: 'flex',flexDirection: 'column', width: '100%', height: '100%'}}>
      <SearchBar />
      <h2>🔥Trending</h2>
       <GridContainer>
      { moviesData.filter( tew => tew.isTrending).map(movie => { 
        return (
          <Card>
          <img src={movie.thumbnail.regular.medium} alt={movie.title} />
          <h6>{movie.year}&nbsp;&bull;&nbsp;{movie.category}&nbsp;&bull;&nbsp;{movie.rating}</h6>
          <h4>{movie.title}</h4>
        </Card>
       )
      })}
      </GridContainer>
      <h2>💡Recommended for you</h2>
      <GridContainer>
      { moviesData.filter( tew => !tew.isTrending).map(movie => { 
        return (
          <Card>
          <img src={movie.thumbnail.regular.medium} alt={movie.title} />
          <h6>{movie.year}&nbsp;&bull;&nbsp;{movie.category}&nbsp;&bull;&nbsp;{movie.rating}</h6>
          <h4>{movie.title}</h4>
        </Card>
       )
      })}
      </GridContainer>
      </div>
        </Layout>
    </>
  )
}

export default Home