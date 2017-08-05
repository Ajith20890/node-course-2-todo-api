var env = process.env.NODE_ENV || 'development';

if (env ==='development'|| env === 'test') {
  var config=require('./config.json');
  var envconfig=config[env];

  Object.keys(envconfig).forEach((Key)=>{
    process.env[Key]=envconfig[Key];
  });
}
