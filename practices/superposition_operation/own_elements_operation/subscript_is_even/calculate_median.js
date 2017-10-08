'use strict';
var calculate_median = function(collection){
  let a = [];
  collection.map(index=>{
    if(index%2 == 0)
      a.push(index);
  })
  let length = a.length;
  let low = Math.floor((length-1)/2);
  let high = Math.ceil((length-1)/2);
  let median = a[low]+a[high];
  //let median = parseInt(a[low])+parseInt(a[high]);
  return (median/2);
};
module.exports = calculate_median;
