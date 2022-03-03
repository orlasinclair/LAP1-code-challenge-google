const appCore = require('./app')
const port = 3000

appCore.app.listen(port, () => {
    console.log(`Google app listening on port ${port}`)
  })
