// const MongoClient = require('mongodb').MongoClient;
// destructuring:
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    };
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('599084ca1f73094e11ecea8f')``
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     cosole.log('Could not fetch data.', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count: ${count}` );
        
    // }, (err) => {
    //     cosole.log('Could not fetch data.', err);
    // });

    db.collection('Users').find({name: 'Ciprian Robu'}).toArray().then((docs) => {
        // console.log(JSON.stringify(docs, undefined, 4));
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log('Could not fetch documents', err)
    });

    db.close();
});

