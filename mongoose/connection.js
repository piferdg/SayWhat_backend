const mongoose = require('mongoose')

//Connect to mongodb

mongoose.connect('mongodb://localhost/saywhat')

mongoose.connection.once('open', function() {
  console.log('Successful connection!!')
}).on('error', function(error) {
  console.log('Connection error', error)
  
})