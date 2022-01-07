const type = require("../models/types");
const { getList } = require("./CategoriesController");

var mySingleton = (function () {

    var instance;
    let listCategory = [];
    function init() {

      
      //Hàm private
      async function privateMethod(){ 
        if(listCategory.length == 0){
          await type.find({},async (err, typeResult) => {
            await typeResult.forEach(element => {
                let a = {};
                a._id = element._id;
                a.typeName = element.typeName;
                a.thumbnail = element.thumbnail;
                a.status = element.status;
                listCategory.push(a);
            });           
          });
        }
        //console.log(listCategory);
      }

      if(listCategory.length == 0)
        privateMethod();

      
      //Hàm và biến public
      return {

        publicProperty: 'haha',
        getList: function () {
          return listCategory;
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
   
   