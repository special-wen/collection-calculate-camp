'use strict';

function amount_even(collection) {

  //在这里写入代码
  let a = [];
  collection.map(index=>{
    if(index%2 == 0)
      a.push(index)
  })
  let sum = a.reduce((a,b)=>{
    return a+b;
  })
  return sum;
}

module.exports = amount_even;
