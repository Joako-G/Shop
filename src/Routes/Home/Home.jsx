import Favorite from '../../Components/Favorite/Favorite'
import Products from '../../Components/Product/Products'

const Home = ({ productsList, addUserProduct }) => {
  return (
    <div className='Home'>
      <Products productsList={productsList} addUserProduct={addUserProduct} />
      <Favorite />
    </div>
  )
}

export default Home
