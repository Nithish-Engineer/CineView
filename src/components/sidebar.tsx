import React from 'react'
import homeIcon from "../assets/icons/icon-nav-home.svg";
import movieIcon from "../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../assets/icons/icon-nav-tv-series.svg";
import bookmarkIcon from "../assets/icons/icon-nav-bookmark.svg";
import { LeftSide } from '../Styles'
import { Link } from 'react-router-dom'

const navLink = [
    {
        name: "Home",
        icon: homeIcon,
        link: "/"
    },
    {
        name: "Movies",
        icon: movieIcon,
        link: "/movies"
    },
    {
        name: "Bookmarks",
        icon: bookmarkIcon,
        link: "/bookmark"
    },
    {
        name: "TV series",
        icon: tvSeriesIcon,
        link: "/tvseries"
    }
]


function Sidebar() {
  return (
    <LeftSide className='LeftSide'>
        <h3>CineView</h3>
        {
        navLink.map((item) => <Link key={item.name}  style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 20px 10px 20px',textDecoration: "none"  }} to={item.link} > <img src={item.icon} style={{width: '1em'}} alt={item.name} /> <h5 style={{margin:'0px', color: 'black', marginLeft: '20%'}}>{item.name}</h5> </Link> )
        }
    </LeftSide>
  )
}

export default Sidebar