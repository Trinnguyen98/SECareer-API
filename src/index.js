import express from 'express';
const app = express();

app.get('/', function(req, res){
  res.send("Hello world")
})

app.listen(7777, function() {
  console.log("Server is listening on port 7777")
})
