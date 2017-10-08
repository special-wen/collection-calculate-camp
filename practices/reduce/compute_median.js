'use strict';

function compute_median(collection) {
  //在这里写入代码
  collection.sort((a,b)=>a-b);
  let length = collection.length;
  let low = Math.floor((length-1)/2);
  let high = Math.ceil((length-1)/2);
  let median = collection[low]+collection[high];
  return median/2;
}

module.exports = compute_median;


