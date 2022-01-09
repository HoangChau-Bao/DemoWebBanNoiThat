const mySingleton = require('../controllers/SingletonCategory');
const myIterator = require('../controllers/IteratorPattern');
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const type = require("../models/types");
chai.use(chaiHttp);
chai.should();


describe("Test", () => {
    /*
    it('Test Singleton', (done) => {
        var singleA = mySingleton.getInstance();
        var singleB = mySingleton.getInstance();
        
        //singleA.pushObject();
        //singleB.pushObject();
        //singleA.getList()
        console.log(singleA.getList());
        console.log(singleA.publicProperty);
        done();
    })
    */

    it('Test Iterator', async () => {
        // var list = [{ho:'chau',ten:'hoang'},{ho:'bao',ten:'phu'}];
        // var iterator = new myIterator(list);
        // iterator.first();
        var listCategory = [];
        var Result = [];
        await type.find({}, (err, typeResult) => {
            Result = typeResult;             
        });
        var iterator = new myIterator(listCategory,Result);
        iterator.each();
       
    })
})