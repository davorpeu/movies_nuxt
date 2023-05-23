const COOKIE_NAME = 'authToken'
const crypto = require('crypto')

export function generateAuthToken() {
  const tokenLength = 32
  const token = crypto.randomBytes(tokenLength).toString('hex')
  return token
}

export function validateAuthToken(token) {
  const storedToken = this.$cookies.get(COOKIE_NAME)
  return token !== '' && token === storedToken
}

export function checkAuthStatus(cookies) {
  try {
    const token = this.$cookies.get(COOKIE_NAME)
    const isValidToken = validateAuthToken(token, cookies)
    return isValidToken
  } catch (error) {
    return false
  }
}

export function login(username, password) {
  return new Promise((resolve, reject) => {
    const users = JSON.parse(this.$cookies.get('users')) || []
    const user = users.find(
      (u) => u.username === username && u.password === password
    )

    if (user) {
      const token = generateAuthToken()
      console.log(token)
      this.$cookies.set(COOKIE_NAME, token) // Update to set the 'authToken' cookie
      resolve()
    } else {
      reject(new Error('Invalid username or password'))
    }
  })
}

export function logout() {
  return new Promise((resolve) => {
    this.$cookies.remove(COOKIE_NAME, { path: '/' })
    resolve()
  })
}
