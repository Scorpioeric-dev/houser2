require('dotenv/config')
const express = require('express')
const app = express()
const massive = require('massive')
const {port,connection_string} = process.env
app.use(express.json())



//endpoints





//Set up massive
massive(connection_string).then(db=>{
    app.set('db',db)
    app.listen(port,()=>{
        console.log(`Me and my ${port}`)
    })
})




