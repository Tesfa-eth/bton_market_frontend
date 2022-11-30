
import Header from './components/Header'
import './App.css';
import OnSaleItemsList from './components/OnSaleItemsList';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
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
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;