const mongoose = require('mongoose')


const configureDB = ()=>{
    mongoose.connect('mongodb://localhost:27017/lib-db',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    .then(()=>{
        console.log('Connected to DB')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = configureDB