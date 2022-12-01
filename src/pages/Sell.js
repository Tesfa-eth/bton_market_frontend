import React from 'react'
import { useState } from 'react'

//sample post request
// {
//   "id": 3,
//   "name": "Car",
//   "seller": "Tesfatsion Shiferaw",
//   "condition": "Great",
//   "price": "3000.00",
//   "negotiable": false,
//   "sold": true,
//   "img": "https://img.freepik.com/premium-photo/generic-brandless-modern-sport-car_110488-1758.jpg?w=2000"
// }

const Sell = () => {
  const [name, setName] = useState('');
  const [seller, setSeller] = useState('')
  const [condition, setCondition] = useState('')
  const [price, setPrice] = useState(0.0)
  const [negotiable, setNegotiable] = useState(false)
  const [sold, setSold] = useState(false)
  const [img, setImg] = useState('')
  //const [postData, setPostData] = useState({})

  const clearInputeFields = () =>{
    setName('')
    setSeller('')
    setCondition('')
    setPrice(0.0)
    setNegotiable(false)
    setSold(false)
    setImg('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const sellItemInfo = {
        "name": name,
        "seller": seller,
        "condition": condition,
        "price": price,
        "negotiable": negotiable,
        "sold": sold,
        "img": img
    }
    //console.log(postData)
    fetch('https://btonmarketapi.herokuapp.com/api/onsale-create/', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(sellItemInfo) })
      .then((response) => response.json())
      .then(clearInputeFields())
      .then((data) =>{
        console.log(data);
      })
      .catch((err) =>{
        console.log(err.message);
      })
  }
  //Todo: condition should be a radio button
  return (
    <div className='create'>
      <h2>Sell Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Item Name:</label>
        <input type='text' required value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Seller name</label>
        <input type='text' required value={seller} onChange={(e) => setSeller(e.target.value)}/>
        <label>Condition</label>
        {/* <input type='text' required value={condition} onChange={(e) => setCondition(e.target.value)}/> */}
        <select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value='Old'>Old</option>
          <option value='Good'>Good</option>
          <option value='Nice'>Nice</option>
          <option value='Excellent'>Excellent</option>
          <option value='Brand new'>Brand new</option>
        </select>
        <label>Price</label>
        <input type='text' required value={price} onChange={(e) => setPrice(e.target.value)}/>
        <label>Negotiable</label>
        <input type='text' value={negotiable} onChange={(e) => setNegotiable(e.target.value)}/>
        <label>Img id</label>
        <input type='text' required value={img} onChange={(e) => setImg(e.target.value)}/>
        <button>Put on Sell</button>
      </form>
    </div>
  )
}

export default Sell
