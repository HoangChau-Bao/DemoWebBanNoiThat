const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const customers = require("../models/customers");

chai.should();
chai.use(chaiHttp);

describe('Test suit main Index', () => {
    // beforeEach(() => {
    //     customers.updateMany({ 'loginInformation.userName': "hoang297" }, { $pull: { listProduct: {} }});
    // })
    // it('test case add to cart 1', () => {
    //     let id = '6098b821bd0c2c1b8fc81479';
    //     chai.request("http://localhost:3000") 
    //     .post("/cart/" + id)
    //     .auth({username:"hoang297", password:"hoang297"})
    //     .send({user:"hoang297"})
    //     .send({amount:"1"})
    //     .end((err,res) => {

    //         customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //             //console.log(result);
    //             result.listProduct[0].productName.should.include("Bàn");
    //         });

    //     })

  
    // });
});

//Test case sample này sẽ test add to cart mọi người test add sản phẩm theo id, check tên của sản phẩm đó, mỗi người làm ít nhất 20 case.
describe('Test IndexController', () => {

    //Gia Phat
    describe('Test suit add to cart 1', () => {
        beforeEach(() => {
            customers.updateMany({ 'loginInformation.userName': "hoang297" }, { $pull: { listProduct: {} }});
        })

        it('test case add to cart 1', (done) => {
            let id = '6098b821bd0c2c1b8fc81479'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường ngủ Ikea Delaktig"); //Đây là tên product cần kiểm tra
                });
                done();
            })
      
        });
        it('test case add to cart 2', (done) => {
            let id = '60929e4d6ce96574b4508dc8'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Bàn kính Ikea Vittsjo"); //Đây là tên product cần kiểm tra
                });
                done();
            })    
        });
        it('test case add to cart 3', (done) => {
            let id = '60929e4d6ce96574b4508dc9'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Bàn làm việc Ikea Micke"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 4', (done) => {
            let id = '60929e4d6ce96574b4508dca'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Bàn xếp Ikea Klipsk"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 5', (done) => {
            let id = '60929e4d6ce96574b4508dcb'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Ghế ăn trẻ em Ikea Agam"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 6', (done) => {
            let id = '60929e4d6ce96574b4508dcc'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Ghế bậc thang Ikea Bekvam"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 7', (done) => {
            let id = '60929e4d6ce96574b4508dcd'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Ghế đôn Ikea Marius"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 8', (done) => {
            let id = '60929e4d6ce96574b4508dce'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Ghế xếp gọn Ikea Nisse"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 9', (done) => {
            let id = '6098b821bd0c2c1b8fc81472'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Tủ TV Ikea Brimne"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 10', (done) => {
            let id = '6098b821bd0c2c1b8fc81473'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Tủ đồ Ikea Hauga"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 11', (done) => {
            let id = '6098b821bd0c2c1b8fc81474'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Tủ đa năng Ikea Hemnes"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 12', (done) => {
            let id = '6098b821bd0c2c1b8fc81475'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Tủ đa năng Ikea Malm"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 13', (done) => {
            let id = '6098b821bd0c2c1b8fc81476'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Tủ đa năng Ikea Songesand"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 14', (done) => {
            let id = '6098b821bd0c2c1b8fc81477'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường ngủ Ikea Malm"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 15', (done) => {
            let id = '6098b821bd0c2c1b8fc81478'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường ngủ Ikea Hemnes"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 16', (done) => {
            let id = '6098b821bd0c2c1b8fc81479'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường ngủ Ikea Delaktig"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 17', (done) => {
            let id = '6098b821bd0c2c1b8fc8147a'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường ngủ Ikea Grimsbu"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 18', (done) => {
            let id = '6098b821bd0c2c1b8fc8147b'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường ngủ Ikea Songesand"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 19', (done) => {
            let id = '6098b821bd0c2c1b8fc8147c'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường ngủ Ikea Leirvik"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 20', (done) => {
            let id = '6098b821bd0c2c1b8fc8147d'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường ngủ Ikea Nordli"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });
        it('test case add to cart 21', (done) => {
            let id = '6098b821bd0c2c1b8fc8147e'; //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Đèn trần Ikea Grinsbyn"); //Đây là tên product cần kiểm tra
                });
                done();
            })
        });


    });

    //MinhPhat
    describe('Test suit add to cart 2', () => {
        beforeEach(() => {
            customers.updateMany({ 'loginInformation.userName': "hoang297" }, { $pull: { listProduct: {} }});
        })

        it('test case add to cart 1', (done) => {
            let id = '6098b821bd0c2c1b8fc81479';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Bàn"); //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
    });

    //Huy
    describe('Test suit add to cart 3', () => {
        beforeEach(() => {
            customers.updateMany({ 'loginInformation.userName': "hoang297" }, { $pull: { listProduct: {} }});
        })

        it('test case add to cart 1', (done) => {
            let id = '6098b821bd0c2c1b8fc81479';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Bàn");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
    });
})