var mongoose=require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
  type:String,
  required:true,
  minlength:5,
  trim:true
  },completed:{
    type:Boolean,
    default:false
  },
    completedAt:{
      type:Number,
      default:null
    }
});

module.exports={
   Todo
};
//
// var newTodo = new Todo({
//   text:'Ajiths Rakesh',
//   completed:true,
//   completedAt:900
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Save Todo:');
//   console.log(JSON.stringify(doc,undefined,2))
// },(e)=>{
//   console.log('Unable to save Todo:',e);
// });


// var newTodo = new Todo({
//   text:'cook dinner'
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved Todo :',doc);
// },(e)=>{
//   console.log('Unable to save Todo');
// })
