export default function({ redirect, app }) {
  if (process.browser) {
    // Check if the user is authenticated
    const token = app.$cookies.get('token')
    if (!token) {
      return redirect('/login') // Redirect to the login page if not authenticated
    }
  } else {
    // Handle SSR (server-side rendering)
    // You can either allow or disallow access to the protected routes during SSR
    // For example, you can redirect to the login page or return an error response
    // based on your specific requirements.
  }
}
