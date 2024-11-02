const express = require('express')
const app = express()
const port = 3000

const data = {
    messageData: 'Hello'
}

//set function of route handler
function routeHandleFunc(req,res){
    res.send('hello')
}

function restApiFunc(req,res){
    res.status(200).json(data)
}

function portListenFunc(){
    console.log(`listning at ${port}`)
}

//bind the this value to app so it does not refer to global
const routeHandle = routeHandleFunc.bind(app)
const restApi = restApiFunc.bind(app)

app.get('/',routeHandle)

app.get('/api',restApi)

app.listen(port, portListenFunc())