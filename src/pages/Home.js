import React from 'react'
import Header from '../components/Header'
import OnSaleItemsList from '../components/OnSaleItemsList'
import { useState, useEffect } from 'react';

const Home = () => {
  const [onSaleItems, setOnSaleItems] = useState([]);
  useEffect(() => {
    fetch('https://btonmarketapi.herokuapp.com/api/onsale-items/')
    .then((response) => response.json())
    .then(data => 
      //console.log(data)
     setOnSaleItems(data)
      )
 }, []);
  return (
    <>
      <Header username={'Tesfa'}/>
      <OnSaleItemsList onSaleItems={onSaleItems} />
    </>
  )
}

export default Home
