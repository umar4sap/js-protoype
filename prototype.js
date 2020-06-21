
/**
 * Author : Umar
 */

 
//Example of JavaScript Object Constructors & Prototyping in java script



function Kid(age,name,city,msg){
    this.age=age,
    this.name=name,
    this.city=city
    this.showConsole=function(test,cb){
        return test+1
       
    }
}

var kidData=new Kid(2,"musawwir","Dubai","enjoy life");
kidData.showConsole("enjoy life");

kidData.showconsole(2,function(data){console.log("gotdata",data)})
