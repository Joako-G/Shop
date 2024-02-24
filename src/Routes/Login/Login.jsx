import { useForm } from 'react-hook-form'
import { getUsersMkApi } from '../../service'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    getUsersMkApi()
      .then(dataA => {
        const user = dataA.find(u => u.user === data.username && u.password === data.password)
        if (user) {
          setUser(user)
          window.localStorage.setItem('user', JSON.stringify(user.user))
          navigate('/')
          console.log('Datos correctos')
        } else {
          console.log('Usuario o Contraseña incorrectos')
        }
      })
      .catch(err => console.log('Error: ', err))
  }

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor='username'>User</label>
        <input
          type='text'
          {...register('username', { required: 'Debe ingresar nombre de usuario' })}
        />
        <span> {errors.username?.message} </span>

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          {...register('password', { required: 'Debe ingresar una contraseña' })}
        />
        <span> {errors.password?.message} </span>

        <button type='submit'>Enviar</button>
        {/* Agregar un modal para mostrar al usuario el resultado del login */}
      </form>
    </div>
  )
}

export default Login
