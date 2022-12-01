import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Sell = () => {
  const [name, setName] = useState('');
  const [seller, setSeller] = useState('')
  const [condition, setCondition] = useState('')
  const [price, setPrice] = useState(0.0)
  const [negotiable, setNegotiable] = useState(false)
  const [sold, setSold] = useState(false)
  const [img, setImg] = useState('')

  //const toastOnSubmission = () => toast("Your item is on sale now. Buyers will be reaching out to you soon!");

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
        //console.log(data);
        alert("Your item is on sale now. Buyers will be reaching out to you soon!")
      })
      .catch((err) =>{
        console.log(err.message);
      })
  }
  return (
    <div className='sell-container'>
    <div className='create'>
      <h2>Sell Item</h2>
      <form onSubmit={handleSubmit}>
        <label className='sell-lable'>Item Name</label>
        <input type='text' required placeholder='Item name' value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Seller name</label>
        <input type='text' required value={seller} placeholder='John Wick' onChange={(e) => setSeller(e.target.value)}/>
        <label>Condition</label>
        <select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value='Old'>Old</option>
          <option value='Good'>Good</option>
          <option value='Nice'>Nice</option>
          <option value='Excellent'>Excellent</option>
          <option value='Brand new'>Brand new</option>
        </select>
        <label>Price</label>
        <input type='text' required value={price} placeholder='enter price' onChange={(e) => setPrice(e.target.value)}/>
        <div className='radio-button' required onChange={(e) => setNegotiable(e.target.value)}>
          <input type='radio' value={true} name='negotiate' /> Negotiable
          <input type='radio' value={false} name='negotiate' /> Non-Negotiable
        </div>

        <label>Image id</label>
        <input type='text' required value={img} placeholder='https://www.google.com/image' onChange={(e) => setImg(e.target.value)}/>
        <button className='submit-button'>Put on Sell</button>
      </form>
    </div>
    </div>
  )
}

export default Sell
