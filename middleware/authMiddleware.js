export default function({ req, route, redirect }) {
  const isAuthenticated = req.cookies && req.cookies.authToken

  if (!isAuthenticated) {
    if (route.path !== '/') {
      return redirect('/')
    }
  }
}
