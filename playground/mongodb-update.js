const {MongoClient,ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb server');

//  db.collection('Todos').findOneAndUpdate({
//    _id:new ObjectID('594b7cd998445624d083089a')
//  },{
//   $set:{
//     completed:false
//   }
// },{
//     returnOriginal:false
//   }
// ).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({_id:new ObjectID('594ab90622d66521e0af174b')}
,{
  $set:{
    Name:'Ajith'},
    $inc:{
      "Age":1
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});

//db.close();

});
