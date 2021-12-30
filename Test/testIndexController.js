const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const customers = require("../models/customers");

chai.should();
chai.use(chaiHttp);

describe('Test suit main Index', () => {
    beforeEach(() => {
        customers.updateMany({ 'loginInformation.userName': "hoang297" }, { $pull: { listProduct: {} }});
    })
    it('test case add to cart 1', () => {
        let id = '6098b821bd0c2c1b8fc81479';
        chai.request("http://localhost:3000") 
        .post("/cart/" + id)
        .auth({username:"hoang297", password:"hoang297"})
        .send({user:"hoang297"})
        .send({amount:"1"})
        .end((err,res) => {

            customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                //console.log(result);
                result.listProduct[0].productName.should.include("Bàn");
            });

        })

  
    });
});