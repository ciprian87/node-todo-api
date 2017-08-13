// const MongoClient = require('mongodb').MongoClient;
// destructuring:
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    };
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to add',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //insert newdoc in users collection: name, age, location

    // db.collection('Users').insertOne({
    //     name: 'Ciprian Robu', 
    //     age: 30,
    //     location: 'Chicago'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Coud not insert record into database', err);
    //     };


    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 4));
    // })



    db.close();
});

