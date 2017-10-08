'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let a = [];
  collection.map(index=>{
    if(index %2 != 0)
      a.push(index);
  })
  let sum = a.reduce((a,b)=>{
    return a+b;
  })
  let length = a.length;
  let average = sum/length;
  return average;
}

module.exports = average_uneven;
