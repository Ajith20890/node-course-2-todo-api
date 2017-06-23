var mongoose=require('mongoose');

var User = mongoose.model('User',{
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  }
});

//
// var newUser = new User({email:'ajith.aithal20890@gmail.com'});
// //
// // newUser.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(err)=>{
//   console.log('Error iss the folowing:',err);
// });

module.exports={User

};
