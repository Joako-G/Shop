import { Link } from 'react-router-dom'

const Product = ({ product, addUserProduct }) => {
  const { id, image, price, title } = product

  const handleClicl = () => {
    addUserProduct(product)
  }

  return (
    <>
      <div key={id} className='card-product'>
        <img src={image} alt='imagen' />
        <h3 className='product-title'> {title} </h3>
        <h3 className='price-title'> {price} $ </h3>
        <Link to={`/product/${id}`}>Ver mas</Link>
        <button onClick={handleClicl}>Agregar al carro</button>
      </div>
    </>
  )
}

export default Product
