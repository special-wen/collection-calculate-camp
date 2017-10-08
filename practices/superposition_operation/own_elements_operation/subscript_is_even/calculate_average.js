'use strict';
var calculate_average = function(collection){
  let a = [];
  collection.map(index=>{
    if(index%2 == 0)
      a.push(index);
  })
  let sum = a.reduce((a,b)=>{
    return a+b;
  })
  let length = a.length;
  return sum/length;
};
module.exports = calculate_average;
