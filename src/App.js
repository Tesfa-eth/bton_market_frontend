import logo from './logo.svg';
import Header from './components/Header'
import React, { useState, useEffect } from 'react';
import './App.css';
import OnSaleItemsList from './components/OnSaleItemsList';

function fetchOnSaleItems(){
  console.log("Hello")
}

// http://127.0.0.1:8000/api/onsale-items/
function App() {
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
    
    <div className="main-container">
      <Header username={'Tesfa'}/>
      <OnSaleItemsList onSaleItems={onSaleItems} />
    </div>
  );
}

export default App;