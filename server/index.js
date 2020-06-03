const express = require('express')
const port = 3030
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

//Set up DB
const configureDB =  require('./config/database')
configureDB()

const routes = require('./config/routes')
app.use('/',routes)

app.listen(port,()=>{
     console.log('Listening to port ',port)
})