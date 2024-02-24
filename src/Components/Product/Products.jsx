import Product from './Product'

const Products = ({ productsList, addUserProduct }) => {
  return (
    <div className='products'>
      {
      productsList.map((product) => (
        <Product
          key={product.id}
          product={product}
          addUserProduct={addUserProduct}
        />

      ))
    }
    </div>
  )
}

export default Products
