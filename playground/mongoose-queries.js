const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5999fb4155c590ede7d8443d11';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

User.findById('599247aefb0a4970c90c96dd').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log('User by id:', user);
}).catch((e) => {
    console.log(e);
})

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id:', todo);
// }).catch((e) => {
//     console.log(e);
// });