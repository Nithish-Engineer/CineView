import React, { useContext, useEffect } from 'react'
import Layout from '../../layouts'

import { Card, GridContainer } from '../../Styles';
import { MovieContext } from '../../context';
import { ItemsContainer } from '../../Styles';

function TVSeries() {
const {state, dispatch} = useContext(MovieContext);
useEffect(() => {
dispatch({type: "TvSeries"});
},[]);
  return (
    <>
    <Layout >
      <ItemsContainer>
      <h2>🎬 Tv Series</h2>
       <GridContainer>     
      { state.filteredData?.map(movie => { 
        return (
          <Card key={movie.title}>
          <img src={movie.thumbnail.regular.medium} alt={movie.title} />
          <h6>{movie.year}&nbsp;&bull;&nbsp;{movie.category}&nbsp;&bull;&nbsp;{movie.rating}</h6>
          <h4>{movie.title}</h4>
        </Card>
       )
      })}
      </GridContainer>
      </ItemsContainer>
        </Layout>
    </>
  )
}

export default TVSeries