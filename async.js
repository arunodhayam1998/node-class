console.log('.................................async............................') 
console.log('hello');

setTimeout(() => {
    console.log('nan late ah varuvan')
    
}, 2000);

console.log('harish')


console.log('//////////////////////////////////////call back///////////////////////////');

var Arun = require('./chumma')
function Arun(){
  console.log('hello guys');
}

function Hari(fn){
  console.log('hello world');
  fn();
  console.log('guys leave')
}

Hari(Arun);