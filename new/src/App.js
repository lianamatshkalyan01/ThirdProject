// import logo from './logo.svg';
import './App.css';
import {Route, Link, Routes} from 'react-router-dom'
import {Home , About,} from "./Header"
import Product from "./Product"
import { Fragment } from 'react';
import Footer from "./Footer"
import Item from "./Items"
import logoImg from "./logo.jfif"

function App() {
  return (
    <Fragment>
    <div>
    <div className='container'>
    <img src={logoImg} alt="logo"/>
      <ul className='list'>
        <li> <Link to="/">Home</Link> </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product">Products</Link> </li>
      </ul>
    </div>
    <Routes>
      <Route exact path = "/" element = {<Home />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/product" element = {<Product />} />
      <Route path ="/product/:id" element={<Item/>} />
    </Routes>
    </div>
    <div>
      <Footer />
    </div>
    </Fragment>
     );
}

export default App;
