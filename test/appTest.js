const assert = require('chai').assert;
// const sayhello = require('../app').sayhello;
// const addnumber = require('../app').addnumber;
const app = require('../app');


describe('App',function(){

    
        describe('sayhello()',function(){

            it('should return hello',function(){
                let result =app.sayhello();
                assert.equal(result,'hello');
            });
            
            it('sayhello should return type string', function(){
                let result =app.sayhello();
                assert.typeOf(result,'String');
            });
            
        });
        

   

        describe('addnumber()',function(){
            it('addnumber should be above 5',function(){
                let result = app.addnumber(5,5);
                assert.isAbove(result,5);
            });
            
            it('addnumber should return type string', function(){
                let result = app.addnumber(5,5);
                assert.typeOf(result,'number');
            });
            

        });
        


    




});