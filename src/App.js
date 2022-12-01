
import Header from './components/Header'
import './App.css';
import OnSaleItemsList from './components/OnSaleItemsList';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Profile from './pages/Profile'
import {Route, Routes} from 'react-router-dom'

function fetchOnSaleItems(){
  console.log("Hello")
}

// http://127.0.0.1:8000/api/onsale-items/
function App() {
  //console.log(window.location)
  return (
    <div className="main-container">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;