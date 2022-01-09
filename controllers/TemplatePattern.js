class TemplateMethod
{
    constructor() {
        if(this.constructor == TemplateMethod)
            throw new Error(" Object of Abstract Class cannot be created");
    }

    PrintPreRouteInformation(req){
        throw new Error("Abstract Method has no implementation");
    }
    PrintCurrentFunctionName(){
        throw new Error("Abstract Method has no implementation");
    }
    PrintInformation(req,currentFuntionName,controllerName){
        this.PrintCurrentFunctionName(currentFuntionName,controllerName);
        this.PrintPreRouteInformation(req);        
    }
}

class myTemplateMethod extends TemplateMethod {
    PrintCurrentFunctionName(currentFuntionName,controllerName){   
        console.log('\n\n-----------------------------------------')
        console.time('Template');
        console.log('Current funtion: ' + controllerName + ' ' + currentFuntionName);    
    }
    PrintPreRouteInformation(req){
        //super.display();
        console.log(req.route);      
        if(req.body){
            console.log('Request body:');
            console.log(req.body);
        }
        // if(req.user){
        //     console.log('User:');
        //     console.log(req.user);
        // }
        console.timeEnd("Template"); 
    }
    
}

module.exports = myTemplateMethod;

