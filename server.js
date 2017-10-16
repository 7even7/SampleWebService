var express = require('express')
var app = express()
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.text());


app.get('/', (request, response)=>{
    response.sendFile(__dirname +'//public//index.html')
})

app.get('/test', (request, response)=>{
    response.send('Hello there')
})
app.post('/post', (request, response)=>{
    console.log(request.body)
    response.send(request.body +  "  10-4")
})

app.listen(port, ()=>{
    console.log("Express app listening on port: " + port)
})

