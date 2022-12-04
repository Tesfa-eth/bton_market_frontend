import React from 'react'
import Header from '../components/Header'
import OnSaleItemsList from '../components/OnSaleItemsList'
import TextField from "@mui/material/TextField";
import { useState, useEffect } from 'react';

const Home = () => {
  const [onSaleItems, setOnSaleItems] = useState([]);
  const [inputText, setInputText] = useState("")
  useEffect(() => {
    fetch('https://btonmarketapi.herokuapp.com/api/onsale-items/')
    .then((response) => response.json())
    .then(data => 
      //console.log(data)
     setOnSaleItems(data)
      )
 }, []);
 const inputHandler = (e) => {
  var search_url = `https://btonmarketapi.herokuapp.com/api/searchItem/${e.target.value}`
  if(e.target.value.length == 0){
    search_url = 'https://btonmarketapi.herokuapp.com/api/onsale-items/'
  }
  console.log(search_url)
  fetch(search_url)
  .then((response) => response.json())
  .then(data => 
    setOnSaleItems(data)
    )
 }
  return (
    <>
      <Header username={'Tesfa'}/>
      <div className='search'>
      <input type='text'  placeholder='What are you looking for?' className="search" onChange={(e) => inputHandler(e)}/>
      </div>
      <OnSaleItemsList onSaleItems={onSaleItems} />
    </>
  )
}

export default Home
