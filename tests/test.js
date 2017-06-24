const expect =require('expect');
const request = require('supertest');

const {app} =require('./../server');
const {Todo}=require('./../models');

describe('POST /todos',()=>{
  it('should create a new todo',(done)=>{
    var text ='Test todo text';
    
  });
});
