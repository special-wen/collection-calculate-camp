'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let a = collection.split("->");
  a.sort((a,b)=>a-b);
  let length = a.length;
  let low = Math.floor((length-1)/2);
  let high = Math.ceil((length-1)/2);
  let median = parseInt(a[low])+parseInt(a[high]);
  return median/2;
}

module.exports = compute_chain_median;
