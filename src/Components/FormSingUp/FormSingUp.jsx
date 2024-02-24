import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../service'

export function FormSingUp () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log('Datos: ', data)
    const newUser = addUser(data)
    console.log('Resultado de nuevo usuario: ', newUser)
    navigate('/')
  }

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Nombre'
          {...register('firstname', { required: 'Debe ingresar su nombre' })}
        />
        <span> {errors.firstname?.message} </span>

        <input
          type='text'
          placeholder='Apellido'
          {...register('lastname', { required: 'Debe ingresar su apellido' })}
        />
        <span> {errors.lastname?.message} </span>

        <input
          type='email'
          placeholder='Correo'
          {...register('email', { required: 'Debe ingresar su correo' })}
        />
        <span> {errors.email?.message} </span>

        <input
          type='text'
          placeholder='Nombre de usuario'
          {...register('user', { required: 'Debe ingresar nombre de usuario' })}
        />
        <span> {errors.user?.message} </span>

        <input
          type='password'
          placeholder='Contraseña'
          {...register('password', { required: 'Debe ingresar una contraseña' })}
        />
        <span> {errors.password?.message} </span>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
