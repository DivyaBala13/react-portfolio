import React from 'react'
import products from './data/products'
import ProductCart from './components/ProductCart';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home=()=>{
  return(
    <div style={{display:"flex", flexWrap:"wrap"}}>
      {products.map(product=>(
         <ProductCart key={product.id} product={product}/>
      ))}
    </div>
  );
};

const Cart = () =>{
  return(
    <div>
      <h2>Your cart is empty</h2>
    </div>
  );
};

function App() {
  return (
   <Router>
    <Navbar/>
    <div style={{padding:"2rem"}}>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>  
   </Router>
  );
};

export default App;
