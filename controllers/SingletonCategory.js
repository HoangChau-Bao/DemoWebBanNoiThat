const type = require("../models/types");
const myIterator = require('../controllers/IteratorPattern'); //iterator

var mySingleton = (function () {

    var instance;
    let listCategory = [];
    var Result = [];
    function init() {
      //Hàm private
      async function privateGetList(){ 
          await type.find({},async (err, typeResult) => {
            await typeResult.forEach(element => {
                Result = typeResult;
            });    
            var iterator = new myIterator(listCategory,Result); //Iterator
            iterator.each();       
          });

          
      }

      async function privateUpdateList(){ 
        while(listCategory.length > 0)
          await listCategory.pop();

         await type.find({},async (err, typeResult) => {
            await typeResult.forEach(element => {
                Result = typeResult;
            });  
            var iterator = new myIterator(listCategory,Result); //Iterator
            iterator.each();         
          });
    }

      if(listCategory.length == 0)
        privateGetList();
      //Hàm và biến public
      return {

        publicProperty: 'haha',
        getList: function () {
          return listCategory;
        },
        updateList: function() {
          privateUpdateList();
        },
        pushObject: function() {
          let a = {};
              a._id = 'element._id';
              a.typeName = 'element.typeName';
              a.thumbnail = 'element.thumbnail';
              a.status = 'element.status';
              listCategory.push(a);
        }
      };
    };
    return {
      //Lấy instance nếu có tồn tại hoặc tạo nới nếu không tồn tại.
      getInstance: function () {
        if ( !instance ) {
          instance = init();
        }
        return instance;
      }
    };
  })();

module.exports = mySingleton;
   
   