'use client'

import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import FilterIcon from '@mui/icons-material/Filter';
import { Avatar } from '@mui/material'
import ReorderIcon from '@mui/icons-material/Reorder';


function Sidebar({products}) {

  const handleclick = ()=>{
     
  }   
  return (
    <div className='sidebar'>
       <div className='slider_opt'>
       <Avatar src= 'https://wellgroomedgentleman.com/media/images/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg' />
       <h3>Sagar</h3>
       </div>
        <div className='slider_opt'>
            <HomeIcon style={{color:"white"}}/>
            <h4>Home</h4>
        </div>
        <div className='slider_opt'>
            <SearchIcon style={{color:"white"}}/>
            <h4>Search</h4>
        </div>
        <div className='slider_opt'>
            <DynamicFeedIcon style={{color:"white"}}/>
            <h4>Posts</h4>
        </div>
        <div  className='slider_opt'>
            <FilterIcon style={{color:"white"}}/>
            <h4>Filter</h4>
        </div>
        <div onClick={handleclick} className='slider_opt'>
            <ReorderIcon style={{color:"white"}}/>
            <h4>order</h4>
        </div>
    </div>
  )
}

export default Sidebar