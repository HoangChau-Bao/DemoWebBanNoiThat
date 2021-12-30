const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
chai.use(chaiHttp);
chai.should();

describe('Test Suit main', () => {
    it("It should get right product", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/60929e4d6ce96574b4508dc8")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn kính Ikea Vittsjo");
                done();
            })
    })


    it("Search", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Micke"})
            .end((err,res) => {
                res.text.should.include("Bàn làm việc Ikea Micke");
                //res.text.should.include("Giường ngủ");
                //console.log(res);
                done();
            })
    })

    it("It should get product defaul", (done) => {
        chai.request("http://localhost:3000")       
            .post("/product/product-filter")
            .send({selection:"609138204045f5b26f8c79ab"})
            .end((err,res) => {
                res.text.should.include("Bàn làm việc Ikea Micke");
                //expect(res.text).to.include("Bàn làm việc Ikea")
                //res.text.should.include("Giường ngủ");
                //console.log(res);
                done();
            })
    })
})

//Minh Phat
describe('Test suit 1', () => {
    it("It should get product defaul", (done) => {
        chai.request("http://localhost:3000")       
            .post("/product/product-filter")
            .send({selection:"609138204045f5b26f8c79ab"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn làm việc Ikea Micke");
                done();
            })
    })
})

//Phat
describe('Test suit 2', () => {
    it("Should get right product", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/60929e4d6ce96574b4508dc9")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn làm việc Ikea Micke");
                done();
            })
    })
})

//Huy
describe('Test suit 3', () => {
    it("Search", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Micke"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn làm việc Ikea Micke");              
                done();
            })
    })
})