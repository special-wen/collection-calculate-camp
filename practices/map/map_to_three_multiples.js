'use strict';
var map_to_three_multiples = function(collections){
  let a = [];
  collections.map(index=>{
    index = index*3;
    a.push(index);
  })
  return a;
};

module.exports = map_to_three_multiples;
