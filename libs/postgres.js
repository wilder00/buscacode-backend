const {Pool} = require('pg')

const { environment } = require('../config/config')
const USER  = encodeURIComponent(environment.dbUser)
const PASSWORD = encodeURIComponent(environment.dbPassword)
//const URI = `postgres://${USER}:${PASSWORD}@${environment.dbHost}:${ environment.dbPort}/${environment.dbName}`
const URI = environment.dbURI 

const options = {
  connectionString : URI,
}
if(environment.isProduction){
  options.ssl = {
    rejectUnauthorized: false,
  }
}
const pool = new Pool(options)


pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports =  pool ;
