import { checkAuthStatus } from '@/services/auth'

export default function({ route, redirect }) {
  const isAuthenticated = checkAuthStatus()

  if (!isAuthenticated) {
    // User is not authenticated, redirect them to the login page
    if (route.path !== '/') {
      return redirect('/') // Replace '/login' with the actual login page route
    }
  }
}
