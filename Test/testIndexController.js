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
                    result.listProduct[0].productName.should.include("Bàn"); //Đây là tên product cần kiểm tra
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

        it('test case add to cart product Giường Delaktig', (done) => {
            let id = '6098b821bd0c2c1b8fc81479';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường Delaktig");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Bàn Vittsjo', (done) => {
            let id = '60929e4d6ce96574b4508dc8';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Bàn Vittsjo");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Bàn Ikea Micke', (done) => {
            let id = '60929e4d6ce96574b4508dc9';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Bàn Ikea Micke");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Bàn Klipsk', (done) => {
            let id = '60929e4d6ce96574b4508dca';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Bàn Klipsk");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Ghế ăn trẻ em Ikea Agam', (done) => {
            let id = '60929e4d6ce96574b4508dcb';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Ghế ăn trẻ em Ikea Agam");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Ghế Bekvam', (done) => {
            let id = '60929e4d6ce96574b4508dcc';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Ghế Bekvam");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Ghế Marius', (done) => {
            let id = '60929e4d6ce96574b4508dcd';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Ghế Marius");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Ghế Nisse', (done) => {
            let id = '60929e4d6ce96574b4508dce';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Ghế Nisse");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Tủ Brimne', (done) => {
            let id = '6098b821bd0c2c1b8fc81472';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Tủ Brimne");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Tủ Hauga', (done) => {
            let id = '6098b821bd0c2c1b8fc81473';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Tủ Hauga");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Tủ Hemnes', (done) => {
            let id = '6098b821bd0c2c1b8fc81474';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Tủ Hemnes");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Tủ Malm', (done) => {
            let id = '6098b821bd0c2c1b8fc81475';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Tủ Malm");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Tủ Songesand', (done) => {
            let id = '6098b821bd0c2c1b8fc81476';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Tủ Songesand");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Giường Malm', (done) => {
            let id = '6098b821bd0c2c1b8fc81477';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường Malm");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Giường Hemnes', (done) => {
            let id = '6098b821bd0c2c1b8fc81478';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường Hemnes");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Giường Grimsbu', (done) => {
            let id = '6098b821bd0c2c1b8fc8147a';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường Grimsbu");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Giường Songesand', (done) => {
            let id = '6098b821bd0c2c1b8fc8147b';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường Songesand");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Giường Leirvik', (done) => {
            let id = '6098b821bd0c2c1b8fc8147c';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường Leirvik");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Giường Nordli', (done) => {
            let id = '6098b821bd0c2c1b8fc8147d';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Giường Nordli");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
      
        });
        it('test case add to cart product Đèn Grinsbyn', (done) => {
            let id = '6098b821bd0c2c1b8fc8147e';  //Đây là id product
            chai.request("http://localhost:3000") 
            .post("/cart/" + id)
            .auth({username:"hoang297", password:"hoang297"})
            .send({user:"hoang297"})
            .send({amount:"1"})
            .end((err,res) => {
    
                customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                    //console.log(result);
                    result.listProduct[0].productName.should.include("Đèn Grinsbyn");  //Đây là tên product cần kiểm tra
                });
                done();
            })
    
        });
        
    });
})