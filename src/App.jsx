import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Routes/Login/Login'
import Home from './Routes/Home/Home'
import { useEffect, useState } from 'react'
import { getProducts } from './service'
import NavBar from './Routes/NavBar/NavBar'
import ProductDisplay from './Routes/ProductDisplay/ProductDisplay'
// import SingUp from './Routes/SingUp/SingUp'
import { FormSingUp } from './Components/FormSingUp/FormSingUp'
import { ShoppingCart } from './Routes/ShoppingCart/ShoppingCart'

function App () {
  const [productsList, setProductList] = useState([])
  const [user, setUser] = useState({})
  const [userProduct, setUserProduct] = useState([])

  useEffect(() => {
    const userStorage = window.localStorage.getItem('user')
    if (userStorage) {
      setUser(JSON.parse(userStorage))
    }
  }, [])

  useEffect(() => {
    getProducts()
      .then(data => setProductList(data))
      .catch(err => console.log('Error', err))
  }, [])

  const addUserProduct = (newProduct) => {
    const newUserProduct = [...userProduct, newProduct]
    setUserProduct(newUserProduct)
    console.log('Lista de productos: ', newUserProduct)
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<NavBar firstName={user?.firstname} lastName={user?.lastname} />}>
          <Route index element={<Home productsList={productsList} addUserProduct={addUserProduct} />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='singup' element={<FormSingUp />} />
          <Route path='product/:id' element={<ProductDisplay productList={productsList} />} />
          <Route path='products' element={<ShoppingCart userProduct={userProduct} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
