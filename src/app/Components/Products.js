'use client'
import { Avatar } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import Rating from '@mui/material/Rating';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image'
function Products({image,title,price,rating}) {
    return (
        <div className='posts'>
            <div className='post_user'>
                <AccountCircleIcon style={{color:"white"}}/>
                <h3>Sagar</h3>
            </div>
            <Image className='post_img' src={image} alt="" width={200} height={300}/>
            <h3>₹ {price}</h3>
            <Rating name="half-rating" defaultValue={rating} precision={0.5} />
            <h4>{title}</h4>
            <div className='post_opt'>
                <div className='like'>
                <h4>Like</h4>
                <FavoriteBorderIcon style={{color:"white"}}/>
                </div>
                <h4>comments</h4>
                <h4>share</h4>
            </div>
        </div>
    )
}

export default Products