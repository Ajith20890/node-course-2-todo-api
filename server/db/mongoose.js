var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoaApp' );

//'mongodb://localhost:27017/TodoaApp'


module.exports={
  mongoose
};
