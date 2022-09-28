import Product from './pages/Product'
import Home from './pages/home'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import React, { useState } from 'react'
import { pupularProducts } from './data'
import { SearchProvider } from './pages/SearchContext'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  function onAdd(id, amount) {
    var product = pupularProducts.find((item) => item.id === Number(id))
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + amount } : x
        )
      )
      setTotalPrice(totalPrice + amount * product.price)
    } else {
      setCartItems([...cartItems, { ...product, qty: amount }])
      var cartitem = cartItems.find((item) => item.id === Number(id))
      console.log(cartitem)
      setTotalPrice(totalPrice + amount * product.price)
    }
  }

  return (
    <SearchProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/productlist' element={<ProductList />}></Route>
          <Route
            path='/productlist/product'
            element={<Product onAdd={onAdd} />}
          ></Route>
          <Route
            path='/cart'
            element={<Cart cartItems={cartItems} totalPrice={totalPrice} />}
          ></Route>
        </Routes>
      </Router>
    </SearchProvider>
  )
}

export default App
