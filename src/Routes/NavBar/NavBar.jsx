import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ firstName, lastName, setUser }) => {
  const location = useLocation()
  const currentPath = location.pathname
  const navigate = useNavigate()

  const logOut = () => {
    window.localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

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
                  <button onClick={logOut}>Salir</button>
                </>
                )
              : (
                <>
                  {
                    currentPath === '/login'
                      ? (<Link to='/signup'>Sing Up</Link>)
                      : currentPath === '/signup'
                        ? (<Link to='/login'>Login</Link>)
                        : (
                          <>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Sign Up</Link>
                          </>
                          )
                  }
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
