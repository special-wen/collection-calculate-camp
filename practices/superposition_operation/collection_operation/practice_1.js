'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let a= [];
  let num;
  collection.map(index=>{
    num = index*3+2;
    a.push(num);
  });

  let sum = a.reduce((a,b)=>{
    return a+b;
  })
  return sum;
}

module.exports = hybrid_operation;

