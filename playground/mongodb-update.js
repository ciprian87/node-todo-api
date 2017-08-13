// const MongoClient = require('mongodb').MongoClient;
// destructuring:
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    };
    console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({_id: new ObjectID('599084ca1f73094e11ecea8f')}, {$set: {completed : true}}, {returnOriginal:false}).then((result) => {
//     console.log(result);
// }, (err) => {
//     console.log('Could not find and update requested document', err);
// });

db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('59908ec2911a854e8ea82485')
}, {
    $set: {
        name: "Ciprian"
    }, 
    $inc: {
        age: 2
    }
}, {
    returnOriginal : false
}).then((result) => {
    console.log(result);
}, (err) => {
    console.log('Could not update required document', err);
});
    
// db.close();
});

