const mongoose = require("mongoose");
const { request } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const passport = require("passport");
const server = require("../app");
const customers = require("../models/customers");
const product = require("../models/products");
const OjectId = require("mongodb").ObjectId;

chai.should();
chai.use(chaiHttp);

/*
describe('Test suit main Index', () => {

    //Test QTY GPhat 
    it('Sample test QTY',(done) => {
        var id = '60929e4d6ce96574b4508dc8'; // product ID
        var amount = '4';  // Quantity, change another each test case
        
        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({ temp: "1", namename: "hoang297" })
        .end(() => {
            chai.request("http://localhost:3000")
            .post("/cart/update/" + id)
            .send({amount:amount, username:'hoang297'})
            .then(async () => { 
                await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                    result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
                })        
            })
            .then(async () => {
                await customers.updateOne(
                { "loginInformation.userName": "hoang297" },
                { $set: { listProduct: [] } },
                { multi: true }
                );
                done();
            });
        });
    })

    //Test delete cart QHuy
    it('Sample delete cart item', (done) => {
        let id = '60929e4d6ce96574b4508dca'; // product ID

        chai.request("http://localhost:3000")
        .post("/cart/" + id)
        .send({ temp: "1", namename: "hoang297" })
        .end(() => {
            chai.request("http://localhost:3000")
            .get("/cart/delete/" + id)
            .send({temp:'1',username:"hoang297"})
            .then(async () => { 
                await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                    result.listProduct.length.should.equal(0);                 
                })   
                done();     
            })
        })
    })

    //Test add favorite MPhat
    it('Sample add favorite', (done) => {
        let id = '60929e4d6ce96574b4508dca'; // product ID
        chai.request("http://localhost:3000")
            .get("/product/favorite/" + id)
            .send({temp:'1',username:'hoang297'})
            .then(async ()=>{
                await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                    result.listFavorite[0].productName.should.equal("Bàn xếp Ikea Klipsk"); // productName             
                })   
            })
            .then(async () => {
                await customers.updateOne(
                    { "loginInformation.userName": "hoang297" },{ $set: { listFavorite: [] } },{ multi: true });
                done();
            }) 
    })
});
*/


// Gia Phat done.
describe("Test suit main Index", () => {
    before(() => {
        customers.updateOne(
            { "loginInformation.userName": "hoang297" },
            { $set: { listProduct: [] } },
            { multi: true }
          );
    });

  it("test case add to cart 1", (done) => {
    let id = "60929e4d6ce96574b4508dca"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Bàn xếp Ikea Klipsk"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 2", (done) => {
    let id = "60929e4d6ce96574b4508dc8"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Bàn kính Ikea Vittsjo"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 3", (done) => {
    let id = "60929e4d6ce96574b4508dc9"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Bàn làm việc Ikea Micke"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 3", (done) => {
    let id = "60929e4d6ce96574b4508dca"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Bàn xếp Ikea Klipsk"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 4", (done) => {
    let id = "60929e4d6ce96574b4508dcb"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế ăn trẻ em Ikea Agam"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 5", (done) => {
    let id = "60929e4d6ce96574b4508dcc"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế bậc thang Ikea Bekvam"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 6", (done) => {
    let id = "60929e4d6ce96574b4508dcd"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế đôn Ikea Marius"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 7", (done) => {
    let id = "60929e4d6ce96574b4508dce"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế xếp gọn Ikea Nisse"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 8", (done) => {
    let id = "6098b821bd0c2c1b8fc81472"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ TV Ikea Brimne"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 9", (done) => {
    let id = "6098b821bd0c2c1b8fc81473"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đồ Ikea Hauga"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 10", (done) => {
    let id = "6098b821bd0c2c1b8fc81474"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đa năng Ikea Hemnes"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 11", (done) => {
    let id = "6098b821bd0c2c1b8fc81475"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đa năng Ikea Malm"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 12", (done) => {
    let id = "6098b821bd0c2c1b8fc81476"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đa năng Ikea Songesand"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 13", (done) => {
    let id = "6098b821bd0c2c1b8fc81477"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Malm"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 14", (done) => {
    let id = "6098b821bd0c2c1b8fc81478"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Hemnes"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 15", (done) => {
    let id = "6098b821bd0c2c1b8fc81479"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Delaktig"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 16", (done) => {
    let id = "6098b821bd0c2c1b8fc8147a"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Grimsbu"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 17", (done) => {
    let id = "6098b821bd0c2c1b8fc8147b"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Songesand"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 18", (done) => {
    let id = "6098b821bd0c2c1b8fc8147c"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Leirvik"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 19", (done) => {
    let id = "6098b821bd0c2c1b8fc8147d"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Nordli"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 20", (done) => {
    let id = "6098b821bd0c2c1b8fc8147e"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Đèn trần Ikea Grinsbyn"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
});


//MinhPhat done.
describe("Test suit add to cart 2", () => {
  beforeEach(() => {
    customers.updateMany(
      { "loginInformation.userName": "hoang297" },
      { $pull: { listProduct: {} } }
    );
  });
  it("test case add to cart 1", (done) => {
    let id = "60929e4d6ce96574b4508dc8"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Bàn kính Ikea Vittsjo"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 2", (done) => {
    let id = "60929e4d6ce96574b4508dc9"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Bàn làm việc Ikea Micke"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 3", (done) => {
    let id = "60929e4d6ce96574b4508dca"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Bàn xếp Ikea Klipsk"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 4", (done) => {
    let id = "60929e4d6ce96574b4508dcb"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế ăn trẻ em Ikea Agam"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 5", (done) => {
    let id = "60929e4d6ce96574b4508dcc"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế bậc thang Ikea Bekvam"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 6", (done) => {
    let id = "60929e4d6ce96574b4508dcd"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế đôn Ikea Marius"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 7", (done) => {
    let id = "60929e4d6ce96574b4508dce"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế xếp gọn Ikea Nisse"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 8", (done) => {
    let id = "6098b821bd0c2c1b8fc81472"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ TV Ikea Brimne"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 9", (done) => {
    let id = "6098b821bd0c2c1b8fc81472"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ TV Ikea Brimne"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 10", (done) => {
    let id = "6098b821bd0c2c1b8fc81473"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đồ Ikea Hauga"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 11", (done) => {
    let id = "6098b821bd0c2c1b8fc81474"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đa năng Ikea Hemnes"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 12", (done) => {
    let id = "6098b821bd0c2c1b8fc81475"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đa năng Ikea Malm"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 13", (done) => {
    let id = "6098b821bd0c2c1b8fc81476"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đa năng Ikea Songesand"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 14", (done) => {
    let id = "6098b821bd0c2c1b8fc81477"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Malm"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 15", (done) => {
    let id = "6098b821bd0c2c1b8fc81478"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Hemnes"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 16", (done) => {
    let id = "6098b821bd0c2c1b8fc81479"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Delaktig"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 17", (done) => {
    let id = "6098b821bd0c2c1b8fc8147a"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Grimsbu"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 18", (done) => {
    let id = "6098b821bd0c2c1b8fc8147b"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Songesand"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 19", (done) => {
    let id = "6098b821bd0c2c1b8fc8147c"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Leirvik"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 20", (done) => {
    let id = "6098b821bd0c2c1b8fc8147d"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Nordli"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
});


///Huy done.
describe("Test suit add to cart 3", () => {
  beforeEach(() => {
    customers.updateMany(
      { "loginInformation.userName": "hoang297" },
      { $pull: { listProduct: {} } }
    );
  });

  it("test case add to cart 1", (done) => {
    let id = "60929e4d6ce96574b4508dca"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Bàn xếp Ikea Klipsk"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 2", (done) => {
    let id = "60929e4d6ce96574b4508dc8"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Bàn kính Ikea Vittsjo"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 3", (done) => {
    let id = "60929e4d6ce96574b4508dc9"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Bàn làm việc Ikea Micke"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 4", (done) => {
    let id = "60929e4d6ce96574b4508dcb"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế ăn trẻ em Ikea Agam"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 5", (done) => {
    let id = "60929e4d6ce96574b4508dcc"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế bậc thang Ikea Bekvam"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 6", (done) => {
    let id = "60929e4d6ce96574b4508dcd"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế đôn Ikea Marius"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 7", (done) => {
    let id = "60929e4d6ce96574b4508dce"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Ghế xếp gọn Ikea Nisse"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 8", (done) => {
    let id = "6098b821bd0c2c1b8fc81472"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ TV Ikea Brimne"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 9", (done) => {
    let id = "6098b821bd0c2c1b8fc81473"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đồ Ikea Hauga"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 10", (done) => {
    let id = "6098b821bd0c2c1b8fc81474"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đa năng Ikea Hemnes"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 11", (done) => {
    let id = "6098b821bd0c2c1b8fc81475"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đa năng Ikea Malm"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 12", (done) => {
    let id = "6098b821bd0c2c1b8fc81476"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Tủ đa năng Ikea Songesand"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 13", (done) => {
    let id = "6098b821bd0c2c1b8fc81477"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Malm"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 14", (done) => {
    let id = "6098b821bd0c2c1b8fc81478"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Hemnes"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 15", (done) => {
    let id = "6098b821bd0c2c1b8fc81479"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Delaktig"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 16", (done) => {
    let id = "6098b821bd0c2c1b8fc8147a"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Grimsbu"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 17", (done) => {
    let id = "6098b821bd0c2c1b8fc8147b"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Songesand"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 18", (done) => {
    let id = "6098b821bd0c2c1b8fc8147c"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Leirvik"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 19", (done) => {
    let id = "6098b821bd0c2c1b8fc8147d"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Giường ngủ Ikea Nordli"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });
  it("test case add to cart 20", (done) => {
    let id = "6098b821bd0c2c1b8fc8147e"; //Đây là id product
    chai
      .request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .then(async () => {
        await customers.findOne(
          { "loginInformation.userName": "hoang297" },
          (err, result) => {
            result.listProduct[0].productName.should.include(
              "Đèn trần Ikea Grinsbyn"
            );
          }
        );
      })
      .then(async () => {
        await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
        );
        done();
      });
  });


//GiaPhat
describe("Test suit change QTY 1", () => {
  it('Sample test QTY',(done) => {
    var id = '60929e4d6ce96574b4508dc8'; // product ID
    var amount = '4';  // Quantity, change another each test case
    
    chai.request("http://localhost:3000")
    .post("/cart/" + id)
    .send({ temp: "1", namename: "hoang297" })
    .end(() => {
        chai.request("http://localhost:3000")
        .post("/cart/update/" + id)
        .send({amount:amount, username:'hoang297'})
        .then(async () => { 
            await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
            })        
        })
        .then(async () => {
            await customers.updateOne(
            { "loginInformation.userName": "hoang297" },
            { $set: { listProduct: [] } },
            { multi: true }
            );
            done();
        });
    });
});
it('Sample test QTY 2',(done) => {
  var id = '60929e4d6ce96574b4508dc9'; // product ID
  var amount = '4';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 3',(done) => {
  var id = '60929e4d6ce96574b4508dca'; // product ID
  var amount = '4';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 4',(done) => {
  var id = '60929e4d6ce96574b4508dcb'; // product ID
  var amount = '8';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 5',(done) => {
  var id = '60929e4d6ce96574b4508dcc'; // product ID
  var amount = '1';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 6',(done) => {
  var id = '60929e4d6ce96574b4508dcd'; // product ID
  var amount = '8';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 7 ',(done) => {
  var id = '60929e4d6ce96574b4508dce'; // product ID
  var amount = '6';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 8',(done) => {
  var id = '6098b821bd0c2c1b8fc81472'; // product ID
  var amount = '4';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 9',(done) => {
  var id = '6098b821bd0c2c1b8fc81473'; // product ID
  var amount = '5';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 10',(done) => {
  var id = '6098b821bd0c2c1b8fc81474'; // product ID
  var amount = '4';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 11',(done) => {
  var id = '6098b821bd0c2c1b8fc81475'; // product ID
  var amount = '7';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 12',(done) => {
  var id = '6098b821bd0c2c1b8fc81476'; // product ID
  var amount = '8';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 13',(done) => {
  var id = '6098b821bd0c2c1b8fc81477'; // product ID
  var amount = '4';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 14',(done) => {
  var id = '6098b821bd0c2c1b8fc81478'; // product ID
  var amount = '1';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 15',(done) => {
  var id = '6098b821bd0c2c1b8fc81479'; // product ID
  var amount = '7';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 16',(done) => {
  var id = '6098b821bd0c2c1b8fc8147a'; // product ID
  var amount = '4';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 17',(done) => {
  var id = '6098b821bd0c2c1b8fc8147b'; // product ID
  var amount = '4';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 18',(done) => {
  var id = '6098b821bd0c2c1b8fc8147c'; // product ID
  var amount = '4';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 19',(done) => {
  var id = '6098b821bd0c2c1b8fc8147d'; // product ID
  var amount = '4';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
it('Sample test QTY 20',(done) => {
  var id = '6098b821bd0c2c1b8fc8147e'; // product ID
  var amount = '4';  // Quantity, change another each test case
  
  chai.request("http://localhost:3000")
  .post("/cart/" + id)
  .send({ temp: "1", namename: "hoang297" })
  .end(() => {
      chai.request("http://localhost:3000")
      .post("/cart/update/" + id)
      .send({amount:amount, username:'hoang297'})
      .then(async () => { 
          await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
              result.listProduct[0].amount.should.equal(Number.parseInt(amount));                 
          })        
      })
      .then(async () => {
          await customers.updateOne(
          { "loginInformation.userName": "hoang297" },
          { $set: { listProduct: [] } },
          { multi: true }
          );
          done();
      });
  });
});
})


//QuocHuy
describe("Test suit delete cart item",() => {
  it('Test delete cart item 1', (done) => {
      let id = '60929e4d6ce96574b4508dca'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 2', (done) => {
      let id = '60929e4d6ce96574b4508dc8'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 3', (done) => {
      let id = '60929e4d6ce96574b4508dc9'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 4', (done) => {
      let id = '60929e4d6ce96574b4508dcb'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 5', (done) => {
      let id = '60929e4d6ce96574b4508dcc'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 6', (done) => {
      let id = '60929e4d6ce96574b4508dcd'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 7', (done) => {
      let id = '60929e4d6ce96574b4508dce'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 8', (done) => {
      let id = '6098b821bd0c2c1b8fc81472'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 9', (done) => {
      let id = '66098b821bd0c2c1b8fc81473'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 10', (done) => {
      let id = '6098b821bd0c2c1b8fc81474'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 11', (done) => {
      let id = '6098b821bd0c2c1b8fc81475'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 12', (done) => {
      let id = '6098b821bd0c2c1b8fc81476'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 13', (done) => {
      let id = '6098b821bd0c2c1b8fc81477'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 14', (done) => {
      let id = '6098b821bd0c2c1b8fc81478'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 15', (done) => {
      let id = '6098b821bd0c2c1b8fc81479'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 16', (done) => {
      let id = '6098b821bd0c2c1b8fc8147a'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 17', (done) => {
      let id = '6098b821bd0c2c1b8fc8147b'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 18', (done) => {
      let id = '6098b821bd0c2c1b8fc8147c'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 19', (done) => {
      let id = '6098b821bd0c2c1b8fc8147d'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
  it('Test delete cart item 20', (done) => {
      let id = '66098b821bd0c2c1b8fc8147e'; // product ID

      chai.request("http://localhost:3000")
      .post("/cart/" + id)
      .send({ temp: "1", namename: "hoang297" })
      .end(() => {
          chai.request("http://localhost:3000")
          .get("/cart/delete/" + id)
          .send({temp:'1',username:"hoang297"})
          .then(async () => { 
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listProduct.length.should.equal(0);                 
              })   
              done();     
          })
      })
  })
})

//MinhPhat
describe("Test suit add favorite", () => {
  it('Test add fovorite 1', (done) => {
      let id = '60929e4d6ce96574b4508dca'; // product ID
      chai.request("http://localhost:3000")
          .get("/product/favorite/" + id)
          .send({temp:'1',username:'hoang297'})
          .then(async ()=>{
              await customers.findOne({"loginInformation.userName":"hoang297"}, (err,result) => {
                  result.listFavorite[0].productName.should.equal("Bàn xếp Ikea Klipsk"); // productName             
              })   
          })
          .then(async () => {
              await customers.updateOne(
                  { "loginInformation.userName": "hoang297" },{ $set: { listFavorite: [] } },{ multi: true });
              done();
          }) 
  })
}) })