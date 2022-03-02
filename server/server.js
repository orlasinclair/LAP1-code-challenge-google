const appCore = require('./app')
const port = 3000

appCore.app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
