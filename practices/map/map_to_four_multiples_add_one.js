'use strict';
var map_to_four_multiples_add_one = function(collection){

  let b = [];
  collection.map(index=>{
    index = index*4+1;
    b.push(index);
  })
  return b;
};

module.exports = map_to_four_multiples_add_one;
