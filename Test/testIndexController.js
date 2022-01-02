const mongoose = require('mongoose');
const { request } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const passport = require('passport');
const server = require('../app');
const customers = require("../models/customers");
const OjectId = require('mongodb').ObjectId;

chai.should();
chai.use(chaiHttp);

describe('Test suit main Index', () => {
    // beforeEach( () => {
    //     customers.updateOne({'loginInformation.userName': "hoang297" }, {$pull: {}},  {multi:true});
    // })
    // afterEach( () => {
    //     customers.updateOne({'loginInformation.userName': "hoang297" }, {$pull: {}},  {multi:true});
    // })

    it('test case add to cart 1',  (done) => {
        let id = '60929e4d6ce96574b4508dca'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Bàn xếp Ikea Klipsk");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 2',  (done) => {
        let id = '60929e4d6ce96574b4508dca'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Bàn xếp Ikea Klipsk");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 3',  (done) => {
        let id = '60929e4d6ce96574b4508dca'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Bàn xếp Ikea Klipsk");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 4',  (done) => {
        let id = '60929e4d6ce96574b4508dca'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Bàn xếp Ikea Klipsk");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 5',  (done) => {
        let id = '6098b821bd0c2c1b8fc81478'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Giường ngủ Ikea Hemnes");     
                //console.log(result); 
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
});

//Test case sample này sẽ test add to cart mọi người test add sản phẩm theo id, check tên của sản phẩm đó, mỗi người làm ít nhất 20 case.

    //Gia Phat
    // describe('Test suit add to cart 1', () => {
    //     beforeEach(() => {
    //         customers.updateMany({ 'loginInformation.userName': "hoang297" }, { $pull: { listProduct: {} }});
           
    //     })
    //     // beforeEach(function (done) {
    //     //     setTimeout(done, 450);
    //     // });
    //     // afterEach(function (done) {           
    //     //     done();
    //     //     done();
    //     // });


    //     it('test case add to cart 1', (done) => {
    //         let id = '60929e4d6ce96574b4508dc8'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({amount:"1"})
    //         .then((err,res) => {
    //             if(err){
    //                 console.log(err);
    //                 done();
    //             }
    //             else{
    //                 customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                     //console.log(result);
    //                     result.listProduct[0].productName.should.include("Bàn kính Ikea Vittsjo"); //Đây là tên product cần kiểm tra
    //                 });
    //                 done();
    //             }
                
    //         })
      
    //     });
    //     it('test case add to cart 2', (done) => {
    //         let id = '60929e4d6ce96574b4508dc8'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Bàn kính Ikea Vittsjo"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })    
    //     });
    //     it('test case add to cart 3', (done) => {
    //         let id = '60929e4d6ce96574b4508dc9'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .then((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Bàn làm việc Ikea Micke"); //Đây là tên product cần kiểm tra
    //             });
                
    //             done();
    //         })
    //     });

    //     it('test case add to cart 4', (done) => {
    //         let id = '60929e4d6ce96574b4508dca'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .then((err,res) => {
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Bàn xếp Ikea Klipsk"); //Đây là tên product cần kiểm tra
    //             });
    //           done();  
    //         })
    //     });
    //     it('test case add to cart 5', (done) => {
    //         let id = '60929e4d6ce96574b4508dcb'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Ghế ăn trẻ em Ikea Agam"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 6', (done) => {
    //         let id = '60929e4d6ce96574b4508dcc'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Ghế bậc thang Ikea Bekvam"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 7', (done) => {
    //         let id = '60929e4d6ce96574b4508dcd'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Ghế đôn Ikea Marius"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 8', (done) => {
    //         let id = '60929e4d6ce96574b4508dce'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Ghế xếp gọn Ikea Nisse"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 9', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81472'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Tủ TV Ikea Brimne"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 10', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81473'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Tủ đồ Ikea Hauga"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 11', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81474'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Tủ đa năng Ikea Hemnes"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 12', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81475'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Tủ đa năng Ikea Malm"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 13', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81476'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Tủ đa năng Ikea Songesand"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 14', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81477'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường ngủ Ikea Malm"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 15', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81478'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường ngủ Ikea Hemnes"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 16', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81479'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường ngủ Ikea Delaktig"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 17', (done) => {
    //         let id = '6098b821bd0c2c1b8fc8147a'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường ngủ Ikea Grimsbu"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 18', (done) => {
    //         let id = '6098b821bd0c2c1b8fc8147b'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường ngủ Ikea Songesand"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 19', (done) => {
    //         let id = '6098b821bd0c2c1b8fc8147c'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường ngủ Ikea Leirvik"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 20', (done) => {
    //         let id = '6098b821bd0c2c1b8fc8147d'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường ngủ Ikea Nordli"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });
    //     it('test case add to cart 21', (done) => {
    //         let id = '6098b821bd0c2c1b8fc8147e'; //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Đèn trần Ikea Grinsbyn"); //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    //     });


    // });

    //MinhPhat
    // describe('Test suit add to cart 2', () => {
    //     beforeEach(() => {
    //         customers.updateMany({ 'loginInformation.userName': "hoang297" }, { $pull: { listProduct: {} }});
    //     })
    //     it('test case add to cart 1', () => {
    //         let id = '6098b821bd0c2c1b8fc81479';
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Bàn");
    //             });
    
    //         })
    
      
    //     });
    // });

    //Huy
    describe('Test suit add to cart 3', () => {
        beforeEach(() => {
            customers.updateMany({ 'loginInformation.userName': "hoang297" }, { $pull: { listProduct: {} }});
        })

    //     it('test case add to cart product Giường Delaktig', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81479';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường Delaktig");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Bàn Vittsjo', (done) => {
    //         let id = '60929e4d6ce96574b4508dc8';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Bàn Vittsjo");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Bàn Ikea Micke', (done) => {
    //         let id = '60929e4d6ce96574b4508dc9';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Bàn Ikea Micke");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Bàn Klipsk', (done) => {
    //         let id = '60929e4d6ce96574b4508dca';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Bàn Klipsk");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Ghế ăn trẻ em Ikea Agam', (done) => {
    //         let id = '60929e4d6ce96574b4508dcb';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Ghế ăn trẻ em Ikea Agam");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Ghế Bekvam', (done) => {
    //         let id = '60929e4d6ce96574b4508dcc';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Ghế Bekvam");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Ghế Marius', (done) => {
    //         let id = '60929e4d6ce96574b4508dcd';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Ghế Marius");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Ghế Nisse', (done) => {
    //         let id = '60929e4d6ce96574b4508dce';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Ghế Nisse");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Tủ Brimne', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81472';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Tủ Brimne");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Tủ Hauga', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81473';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Tủ Hauga");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Tủ Hemnes', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81474';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Tủ Hemnes");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Tủ Malm', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81475';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Tủ Malm");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Tủ Songesand', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81476';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Tủ Songesand");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Giường Malm', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81477';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường Malm");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Giường Hemnes', (done) => {
    //         let id = '6098b821bd0c2c1b8fc81478';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường Hemnes");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Giường Grimsbu', (done) => {
    //         let id = '6098b821bd0c2c1b8fc8147a';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường Grimsbu");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Giường Songesand', (done) => {
    //         let id = '6098b821bd0c2c1b8fc8147b';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường Songesand");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Giường Leirvik', (done) => {
    //         let id = '6098b821bd0c2c1b8fc8147c';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường Leirvik");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Giường Nordli', (done) => {
    //         let id = '6098b821bd0c2c1b8fc8147d';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Giường Nordli");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
      
    //     });
    //     it('test case add to cart product Đèn Grinsbyn', (done) => {
    //         let id = '6098b821bd0c2c1b8fc8147e';  //Đây là id product
    //         chai.request("http://localhost:3000") 
    //         .post("/cart/" + id)
    //         .auth({username:"hoang297", password:"hoang297"})
    //         .send({user:"hoang297"})
    //         .send({amount:"1"})
    //         .end((err,res) => {
    
    //             customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
    //                 //console.log(result);
    //                 result.listProduct[0].productName.should.include("Đèn Grinsbyn");  //Đây là tên product cần kiểm tra
    //             });
    //             done();
    //         })
    
    //     });
    it('test case add to cart 1',  (done) => {
        let id = '60929e4d6ce96574b4508dca'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Bàn xếp Ikea Klipsk");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 2',  (done) => {
        let id = '60929e4d6ce96574b4508dc8'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Bàn kính Ikea Vittsjo");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 3',  (done) => {
        let id = '60929e4d6ce96574b4508dc9'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Bàn làm việc Ikea Micke");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 4',  (done) => {
        let id = '60929e4d6ce96574b4508dcb'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Ghế ăn trẻ em Ikea Agam");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 5',  (done) => {
        let id = '60929e4d6ce96574b4508dcc'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Ghế bậc thang Ikea Bekvam");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 6',  (done) => {
        let id = '60929e4d6ce96574b4508dcd'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Ghế đôn Ikea Marius");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 7',  (done) => {
        let id = '60929e4d6ce96574b4508dce'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Ghế xếp gọn Ikea Nisse");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 8',  (done) => {
        let id = '6098b821bd0c2c1b8fc81472'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Tủ TV Ikea Brimne");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 9',  (done) => {
        let id = '6098b821bd0c2c1b8fc81473'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Tủ đồ Ikea Hauga");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 10',  (done) => {
        let id = '6098b821bd0c2c1b8fc81474'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Tủ đa năng Ikea Hemnes");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 11',  (done) => {
        let id = '6098b821bd0c2c1b8fc81475'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Tủ đa năng Ikea Malm");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 12',  (done) => {
        let id = '6098b821bd0c2c1b8fc81476'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Tủ đa năng Ikea Songesand");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 13',  (done) => {
        let id = '6098b821bd0c2c1b8fc81477'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Giường ngủ Ikea Malm");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 14',  (done) => {
        let id = '6098b821bd0c2c1b8fc81478'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Giường ngủ Ikea Hemnes");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 15',  (done) => {
        let id = '6098b821bd0c2c1b8fc81479'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Giường ngủ Ikea Delaktig");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 16',  (done) => {
        let id = '6098b821bd0c2c1b8fc8147a'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Giường ngủ Ikea Grimsbu");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 17',  (done) => {
        let id = '6098b821bd0c2c1b8fc8147b'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Giường ngủ Ikea Songesand");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 18',  (done) => {
        let id = '6098b821bd0c2c1b8fc8147c'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Giường ngủ Ikea Leirvik");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 19',  (done) => {
        let id = '6098b821bd0c2c1b8fc8147d'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Giường ngủ Ikea Nordli");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
    it('test case add to cart 20',  (done) => {
        let id = '6098b821bd0c2c1b8fc8147e'; //Đây là id product
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({temp:'1',namename:'hoang297'})
        .then(async () => {
            await customers.findOne({"loginInformation.userName":"hoang297" }, (err,result) => {
                result.listProduct[0].productName.should.include("Đèn trần Ikea Grinsbyn");      
            })                   
        })
        .then(async () => {
            await customers.updateOne({'loginInformation.userName': "hoang297" }, {$set: {'listProduct': []}},  {multi:true});
            done();
        })    
    });
        
    });