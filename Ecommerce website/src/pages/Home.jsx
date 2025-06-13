// src/pages/Home.jsx
import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [myproducts, setProducts] = useState([]);
  const getProducts=()=>{
    try{
      axios.get('http://localhost:3000/')
      .then((resp)=>{
        console.log(resp.data.products);
        setProducts([...resp.data.products])
      });
 
    } catch(error){
      console.error(error);
    }
  }

useEffect(()=>{
  getProducts();
},[])

  return (
    <div>
      <Banner />
     
      <Products products= {myproducts} />
    
    </div>
  );
};

export default Home;
