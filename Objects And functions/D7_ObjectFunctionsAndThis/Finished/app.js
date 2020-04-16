function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);   
}

a();

console.log(newvariable); // not good!

b();

var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        
        self.name = 'Updated c object';
        console.log(this);
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Updated again! The c object');
        console.log(this);
    }
}

c.log();







//examples:

//function greet(){
//    console.log(language);
//}
//
//greet.language = "English";
//greet.geetings = "Ok";
//console.log(greet.language);
//greet();
//
//console.log(language);

//let a = { c : 3};
//let b;
//b=a
//b.c=4;
//function greet(){
//    console.log(language);
//}
//console.log(a.c)
//var a = undefined;
//
//console.log(a&&a["x"])
//console.log(c);
//b();
//console.log(a);
//function b(){
//    c = "sai";
//    console.log("Data");
//}
//var a = "Data1";
//console.log({}==={}) 
//
//console.log(typeof({})===typeof({}))

// //long running function
//function waitThreeSeconds() {
//    setTimeout(function(){ console.log('finished function') }, 3000);
//}
//function waitThreeSeconds1() {
//    setTimeout(function(){ console.log('finished function1') }, 0);
//}
//function clickHandler() {
//    console.log('click event!');   
//}
//// listen for the click event
//document.addEventListener('click', clickHandler);
//function b(){
//    console.log("Data1");
//}
//function c(){
//    var ms = 3000 + new Date().getTime();
//    while (new Date() < ms){}
//    console.log("Data2");
//}
//function d(){
//    console.log("Data3");
//}
//function e(){
//    console.log("Data4");
//}
//function f(){
//    console.log("Data5");
//}
//function g(){
//    console.log("Data6");
//}
//
//waitThreeSeconds();
//waitThreeSeconds1()
//b();
//c();
//d();
//e();
//f();
//g();
//console.log('finished execution');

//a = function(){}
//console.log(typeof a) 

//
//function foo(){
//  function bar(a){
//    i=3;
//     console.log(a+i);
//}
//  for(var i=1;i<10;i++){
//   bar(i*2);
//  }
//}
//foo();



//
//var a = {} ;
//var x = true;
//
//function c(){
//    console.log("2");
//    return a === 0;
//}
//if(a["a"] || typeof a["a"] === "undefined"){
//    console.log("Some thing is happening");
//}








