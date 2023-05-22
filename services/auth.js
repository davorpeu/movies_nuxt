let isAuthenticated = false

export function login(username, password) {
  return new Promise((resolve, reject) => {
    // Retrieve the user credentials from cookies or any other storage mechanism
    const cookieValue = document.cookie
      .split(';')
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith('users='))

    if (!cookieValue) {
      reject(new Error('Invalid username or password')) // Authentication failed
      return
    }

    const users =
      JSON.parse(decodeURIComponent(cookieValue.split('=')[1])) || []
    const user = users.find(
      (u) => u.username === username && u.password === password
    )

    if (user) {
      isAuthenticated = true // Update the authentication status
      resolve() // Authentication successful
    } else {
      reject(new Error('Invalid username or password')) // Authentication failed
    }
  })
}

export function logout() {
  // Simulate an asynchronous logout process
  return new Promise((resolve) => {
    // Set the authentication status to false
    isAuthenticated = false
    resolve()
  })
}

export function checkAuthStatus() {
  // Return the authentication status
  return isAuthenticated
}
