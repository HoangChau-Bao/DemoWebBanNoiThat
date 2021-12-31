const { request } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const expect = chai.expect();
chai.should();
chai.use(chaiHttp);

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

describe('Test suit 2', () => {
    it("It should get right product", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/60929e4d6ce96574b4508dc8")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn kính Ikea Vittsjo");
                done();
            })
    })
})

describe('Test suit 3: search', () => {
    it("Search Bàn làm việc Ikea Micke", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Micke"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn làm việc Ikea Micke");
                done();
            })
    })
    it("Search Bàn kính Ikea Vittsjo", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Vittsjo"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn kính Ikea Vittsjo");
                done();
            })
    })
    it("Search Bàn xếp Ikea Klipsk", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Klipsk"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn xếp Ikea Klipsk");
                done();
            })
    })
    it("Search Ghế ăn trẻ em Ikea Agam", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Agam"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Ghế ăn trẻ em Ikea Agam");
                done();
            })
    })
    it("Search Ghế bậc thang Ikea Bekvam", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Bekvam"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Ghế bậc thang Ikea Bekvam");
                done();
            })
    })
    it("Search Ghế đôn Ikea Marius", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Marius"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Ghế đôn Ikea Marius");
                done();
            })
    })
    it("Search Ghế xếp gọn Ikea Nisse", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Nisse"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Ghế xếp gọn Ikea Nisse");
                done();
            })
    })
    it("Search Tủ TV Ikea Brimne", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Brimne"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Tủ TV Ikea Brimne");
                done();
            })
    })
    it("Search Tủ đồ Ikea Haugao", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Haugao"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Tủ đồ Ikea Haugao");
                done();
            })
    })
    it("Search Tủ đa năng Ikea Hemnes", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Hemnes"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Tủ đa năng Ikea Hemnes");
                done();
            })
    })
    it("Search Tủ đa năng Ikea Malm", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Malm"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Tủ đa năng Ikea Malm");
                done();
            })
    })
    it("Search Tủ đa năng Ikea Songesand", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Songesand"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Tủ đa năng Ikea Songesand");
                done();
            })
    })
    it("Search Giường ngủ Ikea Malm", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Malm"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Malm");
                done();
            })
    })
    it("Search Giường ngủ Ikea Hemnes", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Hemnes"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Hemnes");
                done();
            })
    })
    it("Search Giường ngủ Ikea Delaktig", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Delaktig"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Delaktig");
                done();
            })
    })
    it("Search Giường ngủ Ikea Grimsbu", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Grimsbu"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Grimsbu");
                done();
            })
    })
    it("Search Giường ngủ Ikea Songesand", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Songesand"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Songesand");
                done();
            })
    })
    it("Search Giường ngủ Ikea Leirvik", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Leirvik"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Leirvik");
                done();
            })
    })
    it("Search Giường ngủ Ikea Nordli", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Nordli"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Nordli");
                done();
            })
    })
    it("Search Đèn trần Ikea Grinsbyn", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Ikea Grinsbyn"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Đèn trần Ikea Grinsbyn");
                done();
            })
    })
    it("Search đèn trần Ikea Grinsbyn", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Grinsbyn"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn kính Ikea Vittsjo");
                done();
            })
    })
    it("Search Bàn kính Ikea Vittsjo", (done) => {
        chai.request("http://localhost:3000")       
            .get("/search")
            .query({search:"Vittsjo"})
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn kính Ikea Grinsbyn");
                done();
            })
    })
})