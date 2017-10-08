'use strict';

function compute_average(collection) {
  //在这里写入代码
  let sum = collection.reduce((a,b)=>{
    return a+b;
  })

  let length = collection.length;
  return sum/length;
}

module.exports = compute_average;

