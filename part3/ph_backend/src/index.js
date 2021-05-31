const config = require('./config')
const app = require('./app')
const db = require('./database')
const logging = require('./logging')

db().then(() => {
  app.listen(config.PORT, () => {
    logging.info(`Server running on port ${config.PORT}`)
  })
})
