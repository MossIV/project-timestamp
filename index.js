// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//A GET endpoint for date that returns a unix key and a utc key
app.get("/api/:date", function (req, res){
  var dateParam = req.params.date;


  dateInt = Number(dateParam)
  if(isNaN(dateInt)){
    var dateObject = Date.parse(dateParam)
    var unixDate = dateObject
    var utcDate = new Date(dateObject).toString()
  }else{
    var unixDate = dateInt
    var utcDate = new Date(dateInt).toString()

  }



  
  console.log(unixDate)
  console.log(utcDate)

  res.json({
    unix: unixDate,
    utc: utcDate
  })
    
})

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
