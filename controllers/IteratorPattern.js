var Iterator = function (listCategory,Result) {
    this.index = 0;
    this.step = 1;
    this.listCategory = listCategory;
    this.Result = Result;
}

Iterator.prototype = {
    first: async function () {
        if(this.Result.length > 0){
            let temp = {};
            temp._id = this.Result[this.index]._id;
            temp.typeName = this.Result[this.index].typeName;
            temp.thumbnail = this.Result[this.index].thumbnail;
            temp.status = this.Result[this.index].status;
            await this.listCategory.push(temp);
            return true;
        }
        return null;
    },
    next: function () {
        if (this.hasNext())
            this.index++
        return;
    },
    hasNext: function (){
        return this.index < this.Result.length;
    },
    isDone: function(){
        return this.index >= this.Result.length;
    },
    reset: function () {
        this.index = 0;
    },
    each: async function () {
        this.reset();
        while(!this.isDone()){
            await this.first();
            this.next();
        }
        console.log('=================\nIterator done.\n=================');
    }
}

module.exports = Iterator;