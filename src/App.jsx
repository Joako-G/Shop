import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Routes/Login/Login'
import Home from './Routes/Home/Home'
import { useEffect, useState } from 'react'
import { getProducts, getUsersMkApi, updateUser } from './service'
import NavBar from './Routes/NavBar/NavBar'
import ProductDisplay from './Routes/ProductDisplay/ProductDisplay'
import { FormSingUp } from './Components/FormSingUp/FormSingUp'
import { ShoppingCart } from './Routes/ShoppingCart/ShoppingCart'

function App () {
  const [productsList, setProductList] = useState([])
  const [user, setUser] = useState({})
  const [userProduct, setUserProduct] = useState([])

  useEffect(() => {
    const userStorage = window.localStorage.getItem('user')
    if (userStorage) {
      userFind(JSON.parse(userStorage))
    }
  }, [])

  useEffect(() => {
    getProducts()
      .then(data => setProductList(data))
      .catch(err => console.log('Error', err))
  }, [])

  const addUserProduct = (newProduct) => {
    const newUserProduct = [...userProduct, newProduct]
    console.log('Usuario: ', user.id)
    if (user.id !== null) {
      updateUser(user.id, newUserProduct)
        .then(data => console.log('Datos actualizados', data))
        .catch(err => console.log('Error al actualizar los datos ', err))
      setUserProduct(newUserProduct)
    }
  }

  const userFind = (userName) => {
    getUsersMkApi()
      .then(data => {
        const userFound = data.find(u => u.user === userName)
        setUser(userFound)
        setUserProduct(userFound.products)
      })
      .catch(err => console.log('Error: ', err))
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<NavBar firstName={user?.firstname} lastName={user?.lastname} setUser={setUser} />}>
          <Route index element={<Home productsList={productsList} addUserProduct={addUserProduct} />} />
          <Route path='login' element={<Login setUser={setUser} setUserProduct={setUserProduct} />} />
          <Route path='signup' element={<FormSingUp />} />
          <Route path='product/:id' element={<ProductDisplay productList={productsList} />} />
          <Route path='products' element={<ShoppingCart userProduct={userProduct} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
