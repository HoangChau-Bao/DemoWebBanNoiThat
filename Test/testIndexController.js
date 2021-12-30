const chai = require('chai');
const chaiHttp = require('chai-http');
const type = require("../models/types");
const supplier = require("../models/suppliers");
const product = require("../models/products");
const customers = require("../models/customers");
const region = require('../models/region');
const bill = require('../models/bills');
const OjectId = require('mongodb').ObjectId;
const { request } = require('chai');

chai.should();
chai.use(chaiHttp);

describe('Test suit main', () => {
    beforeEach(() => {
        customers.updateMany({ 'loginInformation.userName': "hoang297" }, { $pull: { listProduct: {} }});

        customers.findOne({"loginInformation.userName":"hoang297" }, 
        (err,result) => {
            console.log(result);
        });
    })
    it('test case add to cart 1', () => {
        let id = '6098b821bd0c2c1b8fc81479';
        chai.request("http://localhost:3000")       
        .post("/cart/" + id )
        .send(isAuthenticated())
        .send({user:"hoang297"})
        .send({amount:"1"})
        .end((err,res) => {

            customers.findOne({"loginInformation.userName":"hoang297" }, 
            (err,result) => {
                console.log(result);
            });

        })

        
    });
});