const redirects = [{ from: '/', to: '/404' }]

module.exports = function(req, res, next) {
  const redirect = redirects.find((r) => r.from === req.url)
  if (redirect) {
    console.log(`301 redirect: ${redirect.from} => ${redirect.to}`)
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } else {
    next()
  }
}
