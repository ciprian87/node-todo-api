// const MongoClient = require('mongodb').MongoClient;
// destructuring:
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    };
    console.log('Connected to MongoDB server');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Work out'}).then((result) => {
//     console.log(result);
// }, (err) => {
//     console.log('Could not delete data', err);
// });

//deleteOne
// db.collection('Todos').deleteOne({text:'drive car'}).then((result) => {
//     console.log(result);
// }, (err) => {
//     console.log('Could not delete the one document', err);
// })

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({text: 'drive car'}).then((result) => {
//     console.log(result);
// }, (err) => {
//     console.log('Could not delete matching string', err);
// });

// db.collection('Users').deleteMany({name: 'Ciprian Robu'}).then((result) => {
//     console.log(result);
// }, (err) => {
//     console.log('Could not delete documents', err);
// });

db.collection('Users').findOneAndDelete({ _id : new ObjectID('599086d3c337254e1b19011c')}).then((result) => {
    console.log(result);
}, (err) => {
    console.log('Could not find and delete selected document', err);
});
    
// db.close();
});

