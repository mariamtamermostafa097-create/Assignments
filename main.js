//console.log("before timeout(3)");

//setTimeout(() => {
    //console.log("after 3 second");
    
//}, 3000);
//console.log("after timeout(3)");
//console.log("before timeout");

//setTimeout(() => {
    //console.log("after 1 second");
    
//}, 1000);
//console.log("after timeout");
//function one(num) {
//}
   //function childFn() {
        //console.log("childFn");
        
   // }
   
   
    //function parentFn(fn) {
        //console.log("parentFn");
        //fn()
    //}
    

//parentFn(childFn)
//call back function
//bass function as a paramter
//function one(age) {
     //return new Promise((resolve, reject) => {
        //setTimeout(() => {
            //if (age>18) {
                //resolve("done")
            //} 
            //else {
//reject("invalid age") 
            //}
            
        //}, 3000);
    //})
//}
//one(7).then(()=>{
//console.log("inside then");
    
//}).catch((err)=>{
    //console.log({err});
    
//})
function one(fn1,fn2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("one");
            resolve({fn1,fn2})
        }, 3000);
    })
}
function two(fn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("two");
            resolve(fn);
        }, 1000);
    });
}
function three() {
    console.log("three");
    
}
one(two,three).then((functions)=>{
    console.log({functions});
    const {fn1,fn2}=functions
    fn1(fn2).then((fn)=>{
        fn();
    });
});