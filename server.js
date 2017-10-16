var express = require('express')
var app = express()
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.text());
app.use("/public",express.static(__dirname + "//public"));

app.get('/', (request, response)=>{
    response.sendFile(__dirname +'/public/index.html')
})

app.post('/simple', echo)

app.post('/post', (request, response)=>{
    if(request.query.hasOwnProperty('wait')){
        setTimeout(()=>{
            echo(request, response)
        }, request.query.wait)
    }
    else{
        echo(request, response)
    }  
})


function echo(request, response){
    if(request.body.length===undefined || request.body.length===0){
        response.send("Request body is empty")
    }
    else{
        response.send("Received following body: \r\n" + request.body)
    }
    
}
app.listen(port, ()=>{
    console.log("Express app listening on port: " + port)
})