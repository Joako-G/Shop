const SERVER_DOMAIN = 'https://fakestoreapi.com'
const SERVER_DOMAINII = 'https://64cfbdccffcda80aff522398.mockapi.io/menu/users'

export const getProducts = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/products`)
    if (!response.ok) {
      throw new Error('Error')
    }

    return response.json()
  } catch (error) {
    console.log('No se puedo acceder a la api')
  }
}

export const userLogin = async (user) => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })

    if (!response.ok) {
      throw new Error('Error')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Nombre o contraseña incorrectos')
  }
}

export const getUsersMkApi = async () => {
  try {
    const response = await fetch('https://64cfbdccffcda80aff522398.mockapi.io/menu/users')
    if (!response.ok) {
      throw new Error('Error')
    }
    return response.json()
  } catch (error) {
    console.log('Error en la peticion')
  }
}

export const addUser = async (user) => {
  try {
    const response = await fetch(`${SERVER_DOMAINII}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    if (!response.ok) {
      throw new Error('Error')
    }
    const data = await response.json()
    console.log('POST MockAPI: ', data)
    return data
  } catch (error) {
    console.log('Error en la peticion')
  }
}

export const updateUser = async (userId, newProduct) => {
  try {
    const response = await fetch(`${SERVER_DOMAINII}/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ products: newProduct })
    })

    if (!response.ok) {
      throw new Error('Error')
    }
    return response.json()
  } catch (error) {
    console.log('Erro en la peticion')
  }
}
