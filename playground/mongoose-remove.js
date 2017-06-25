 const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/Todo');

const {user1} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findByIdAndRemove('59500d6b836bab64bf233374').then((doc)=>{
//   console.log(doc);
// });

Todo.findOneAndRemove({_id:'59500e76836bab64bf2333a6'}).then((doc)=>{
  console.log(doc);
});
