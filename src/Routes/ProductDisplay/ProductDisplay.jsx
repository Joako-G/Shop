import { useParams } from 'react-router-dom'

const ProductDisplay = ({ productList }) => {
  const { id } = useParams()
  console.log('ID: ', id)
  const [product] = productList.filter((p) => p.id === Number(id))

  console.log('Producto: ', product)

  return (
    <div className='card-product'>
      <img src={product.image} alt={product.title} />
      <h1> {product.title} </h1>
      <h3> {product.description} </h3>
      <p> {product.category} </p>
      <h1> {product.price} $ </h1>

    </div>
  )
}

export default ProductDisplay
