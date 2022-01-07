const mySingleton = require('../controllers/SingletonCategory');
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const type = require("../models/types");
chai.use(chaiHttp);
chai.should();


describe("Test", () => {
    it('Should', (done) => {
        var singleA = mySingleton.getInstance();
        var singleB = mySingleton.getInstance();
        
        //singleA.pushObject();
        //singleB.pushObject();
        //singleA.getList()
        console.log(singleA.getList());
        console.log(singleA.publicProperty);
        done();
    })
})