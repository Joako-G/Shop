import { useEffect, useState } from 'react'

export function ShoppingCart ({ userProduct }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalPrice = userProduct.reduce((acc, p) => acc + p.price, 0)
    console.log('Precio total: ', totalPrice)
    setTotal(totalPrice)
  }, [])

  console.log('Productos del usuario: ', userProduct)
  return (
    <>
      {
        userProduct.length
          ? (
              userProduct.map((product) => (
                <div key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <h4> {product.title} </h4>
                </div>
              ))
            )
          : (<span>No hay productos</span>)
      }
      <h2 style={{ marginTop: '30px' }}>{total}</h2>
    </>
  )
}
