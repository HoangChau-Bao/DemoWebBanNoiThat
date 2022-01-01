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
    it(" should get right product by id", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/60929e4d6ce96574b4508dc9")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn làm việc Ikea Micke");
                done();
            })
    })
    it(" should get right product by id 2", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/60929e4d6ce96574b4508dc8")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn kính Ikea Vittsjo");
                done();
            })
    })
    it(" should get right product by id 3", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/60929e4d6ce96574b4508dca")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn xếp Ikea Klipsk");
                done();
            })
    })
    it(" should get right product by id 4", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/60929e4d6ce96574b4508dca")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Bàn xếp Ikea Klipsk");
                done();
            })
    })
    it(" should get right product by id 5", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/60929e4d6ce96574b4508dcb")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Ghế ăn trẻ em Ikea Agam");
                done();
            })
    })
    it(" should get right product by id 6", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/60929e4d6ce96574b4508dcc")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Ghế bậc thang Ikea Bekvam");
                done();
            })
    })
    it(" should get right product by id 7", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/60929e4d6ce96574b4508dcd")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Ghế đôn Ikea Marius");
                done();
            })
    })
    it(" should get right product by id 8", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/60929e4d6ce96574b4508dce")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Ghế xếp gọn Ikea Nisse");
                done();
            })
    })
    it(" should get right product by id 9", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc81472")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Tủ TV Ikea Brimne");
                done();
            })
    })
    it(" should get right product by id 10", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc81473")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Tủ đồ Ikea Hauga");
                done();
            })
    })
    it(" should get right product by id 11", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc81474")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Tủ đa năng Ikea Hemnes");
                done();
            })
    })
    it(" should get right product by id 11", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc81475")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Tủ đa năng Ikea Malm");
                done();
            })
    })
    it(" should get right product by id 12", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc81476")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Tủ đa năng Ikea Songesand");
                done();
            })
    })
    it(" should get right product by id 13", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc81477")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Malm");
                done();
            })
    })
    it(" should get right product by id 14", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc81478")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Hemnes");
                done();
            })
    })
    it(" should get right product by id 15", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc81479")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Delaktig");
                done();
            })
    })
    it(" should get right product by id 16", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc8147a")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Grimsbu");
                done();
            })
    })
    it(" should get right product by id 17", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc8147b")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Songesand");
                done();
            })
    })
    it(" should get right product by id 18", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc8147c")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Leirvik");
                done();
            })
    })
    it(" should get right product by id 19", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc8147d")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Giường ngủ Ikea Nordli");
                done();
            })
    })
    it(" should get right product by id 20", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc8147e")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Đèn trần Ikea Grinsbyn");
                done();
            })
    })
    it(" should get right product by id 20", (done) => {
        chai.request("http://localhost:3000")
            .get("/product/6098b821bd0c2c1b8fc8147d")
            .end((err,res) => {
                res.should.have.status(200);
                res.text.should.include("Đèn trần Ikea Grinsbyn");
                done()
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