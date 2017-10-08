'use strict';
function map_to_even(collection){
  let a = [];
  collection.map(index=>{
    index = index*2;
    a.push(index);
  })
  return a;
}
module.exports = map_to_even;
