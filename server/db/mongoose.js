var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

let connection = mongoose.connect('mongodb://admin:admin@ds113063.mlab.com:13063/nodetodosample' || 'mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
  }).then(db => {
    console.log('MongoDB is connected')
  }).catch(error => {
    console.log(error)
  });

  module.exports = {
      mongoose
    };