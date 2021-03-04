

var promise = new Promise(
function(resolve, reject){
setTimeout(() => {
resolve("hello js")
},2000)
}
).then(function(resva){
console.log(resva);
return new Promise(
function(rtun){
setTimeout(()=>{
rtun("hello hello")

},2000)
}

)
}).then(function(data){
console.log(data)
})
var x = 9;

var promise = new Promise(
function(resolve,reject){
setTimeout( () => {
if(x > 10){
resolve("hello js");
}
else{
reject("hello java")
}

},2000);
}
).then(function(resvel){
console.log(resvel);
},function(rejvel){
console.log(rejvel)

return new Promise(
function(res){
setTimeout(()=>{
res("hello js")
},2000)
}
).then(function(second){
console.log(second);
})
})
console.log(promise);