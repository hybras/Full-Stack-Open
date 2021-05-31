const app = require('./app')
const config = require('./utils/config')
const initDB = require('./utils/database')
const log = require('./utils/logging')

initDB().then(() => {
  app.listen(config.PORT, () => {
    log.info(`Server running on port ${config.PORT}`)
  })
})
