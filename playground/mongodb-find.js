const {MongoClient,ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb server');

  //
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log('Todos count :',count);
  // },(err)=>{
  //   console.console.log('Unable to find Todos',err);
  // });

db.collection('Users').find({Name:'Ajith'}).toArray().then((result)=>{
  console.log('Users')
  console.log(JSON.stringify(result,undefined,2));
},(err)=>{
  console.log('Error is :',err);
});

// db.collection('todos').find().toArray().then((docs)=>{
//    console.log('Todos',docs);
//  });


// db.collection('Todos').find({_id:new ObjectID('5940d5234e9e0a0e2c632c0e')}).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.console.log('Unable to find Todos',err);
// });
//db.close();

});
