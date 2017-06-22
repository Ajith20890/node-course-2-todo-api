// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb server');

// var obj =new ObjectID();
// console.log(obj);
//
// db.collection('Todos').insertOne({
//   name:'AJITH',
//   Completed:false
// },(err,result)=>{
//   if (err) {
//     return console.log('Unable to insert Todo',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });

// db.collection('Users').insertOne({Name:'Ajith',Age:25,Location:'Rajajinagar Bangalore'},(err,result)=>{
//   if (err) {
//     return console.log('Unable to insert to Users',err);
//   }
//   console.log(result.ops[0]._id.getTimestamp());
// });



db.close();

});
