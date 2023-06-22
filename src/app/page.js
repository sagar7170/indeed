'use client'

import React, { useEffect, useState } from 'react'
import Products from '@/app/Components/Products'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { Avatar } from '@mui/material'
const page = () => {
   const [products, setProducts] = useState([])
   const [filter, setFilter] = useState([])

   useEffect(() => {
      const api = async () => {
         try {
            const res = await fetch('https://fakestoreapi.com/products/')
            const Allproducts = await res.json();
            setProducts(Allproducts)

         } catch (error) {
            console.log(error)
         }
      }
      api()
   }, [products])

   const post = () => {
      window.location.reload();
   }

   const filters = (e) => {
      name = e.target.name;
      const res = products.filter(products => products.category === name);
      setFilter(res);
   }

   return (
      <div className='home'>
         <div className='sidebar'>
            <div className='slider_opt'>
               <Avatar src='https://wellgroomedgentleman.com/media/images/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg' />
               <h3>Sagar</h3>
            </div>
            <div onClick={post} className='slider_opt'>
               <HomeIcon  style={{ color: "white" }} />
               <h4>Home</h4>
            </div>
            <div className='slider_opt'>
               <SearchIcon style={{ color: "white" }} />
               <h4>Search</h4>
            </div>
            <div onClick={post} className='slider_opt'>
               <DynamicFeedIcon style={{ color: "white" }} />
               <h4>Posts</h4>
            </div>
            <h3>Filter's</h3>
            <div className='filters'>
               <button onClick={filters} name="electronics" >electronics</button>
               <button onClick={filters} name="jewelery">jewelery</button>
               <button onClick={filters} name="men's clothing">men's clothing</button>
               <button onClick={filters} name="women's clothing">women's clothing</button>
            </div>
         </div>

         <div className='home_post'>
   
            {
               (filter.length !== 0) ?
                  filter.map(product => (
                     <div className='single'>
                        <Products key={product.id} image={product.image} title={product.title} price={product.price} rating={product.rating.rate} />
                     </div>
                  )) : products.map(product => (
                     <div className='single'>
                        <Products key={product.id} image={product.image} title={product.title} price={product.price} rating={product.rating.rate} />
                     </div>
                  ))
            }
         </div>

      </div>
   )
}

export default page 