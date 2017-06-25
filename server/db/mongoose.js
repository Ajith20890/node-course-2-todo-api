var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://ajithk:Ajith2089020890@ds139082.mlab.com:39082/ak20890' );

//'mongodb://localhost:27017/TodoaApp'


module.exports={
  mongoose
};
