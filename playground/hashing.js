const {SHA256}=require('crypto-js');

const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs');

var password ='123abc!';
bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash(password,salt,(err,hash)=>{
    console.log(hash);
  });
});
var hashedpassword = '$2a$10$.wiS9rGLw65ULa4.ZSl9p.P54BTrVJqvAvjUCFaWfNLy1XWOd3Zni';

bcrypt.compare(password,hashedpassword,(err,res)=>{
  console.log(res);
});







// var data ={
//   id:10
// };
// var token = jwt.sign(data,'123abc');
// console.log('Token',token);
//
// var decoded = jwt.verify(token,'123abc');
// console.log('Decoded :',decoded);

// var message = 'I am ajith';
//
// var hash=SHA256(message).toString();
//
// console.log('Message :',message);
//
// console.log('Hashed Value:',hash);
//
// var data = {
//   id:4
// };
//
// var token ={
//   data,
//   hash:SHA256(JSON.stringify(data)+'Somesecret').toString()
// }
//
// console.log(token.hash);
//
// var resulthash = SHA256(JSON.stringify(token.data)+'Somesecret').toString();
// if (resulthash === token.hash) {
//   console.log('Data was not changed');

// }  else {
//     console.log('Data was changed do not trust !');
//   }
