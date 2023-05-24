import { get } from 'lodash'

export default function(req, res) {
  // Mock authentication logic

  const { username, password } = req.body
  const existingUsers = get(req, 'cookies.users', [])

  // Replace this with your actual authentication logic
  // Check if username and password are valid
  const user = existingUsers.find(
    (u) => u.username === username && u.password === password
  )

  if (user) {
    // Return a successful login response
    return res.status(200).json({ success: true })
  }

  // Return an error response for invalid credentials
  return res.status(401).json({ error: 'Invalid username or password' })
}
