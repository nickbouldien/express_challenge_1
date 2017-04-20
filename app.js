const express = require('express');
const app = express();
// let appname = {
//   process: [3001, 2000, 3000]
// }

//app.process.argv[2] = 3000

app.get('/', function (request, response) {
  response.send('Hello, World');
})

app.get('/hello/:name', function(request, response){
  let name = request.params['name'];
  response.send('hello ' + name);
})

app.get('/reverse/:text', function(request, response){
  let text = request.params['text']
  let reverseText = text.split("").reverse().join("");
  //console.log(reverseText);
  response.send(reverseText);
})

// app.get('/add/:nums', function(request, response){
//
//   let nums = request.params['nums'];
//   let sum = nums.reduce((a,b) => a + b, 0)
//
//
//   console.log(sum);
//   response.send();
// })



app.listen(process.argv[2], function() {
    console.log('listening on port 3000');
    console.log(process.argv[2]);
})

//
