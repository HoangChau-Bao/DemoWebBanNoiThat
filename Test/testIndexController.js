const chai = require('chai');
const chaiHttp = require('chai-http');
const type = require("../models/types");
const supplier = require("../models/suppliers");
const product = require("../models/products");
const customers = require("../models/customers");
const region = require('../models/region');
const bill = require('../models/bills');
const OjectId = require('mongodb').ObjectId;

chai.should();
chai.use(chaiHttp);