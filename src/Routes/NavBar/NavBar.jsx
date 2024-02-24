import { Link, Outlet } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ firstName, lastName }) => {
  return (
    <>
      <div className='container-nav'>
        <Link to='/'>
          <p>logo</p>
        </Link>
        <div className='user'>
          {
            firstName
              ? (
                <>
                  <div style={{ margin: ' 0 0 8px 0' }}>Agregar usuario</div>
                  <p> {firstName} {lastName} </p>
                  <Link to='/products'>Carrito</Link>
                </>
                )
              : (
                <>
                  <Link to='/login'>Login</Link>
                  <Link to='/singup'>Sing Up</Link>
                </>
                )
          }
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default NavBar
