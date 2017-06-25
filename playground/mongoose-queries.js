const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/Todo');

const {user1} = require('./../server/models/user');

user1.findById('594ea45aa71f5772a7d2c95a').then((doc)=>{
  console.log('akkk: ',doc);
  if (!doc) {
    return console.log('Id not found');
  }
  console.log(JSON.stringify(doc,undefined,2));
}).catch((e)=>{
  console.log('Error is present',e);
});
// var id ='694cfad0725bc8b42107bac6';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id is not validdddd')
// }
// Todo.find({
//   _id:id
// }).then((doc)=>{
//   console.log('Todos:',doc);
// });
//
// Todo.findOne({
//   _id:id
// }).then((doc)=>{
//   console.log('Todos:',doc);
// });
//
// Todo.findById(id).then((doc)=>{
//   if (!doc) {
//     return console.log('Id is not present');
//   }
//   console.log('Todos:',doc);
// }).catch((e)=>{
//   console.log(e);
// });
