'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let a = [];
  collection_a.filter(value=>{
    collection_b.map(index=>{
      if(value % index == 0){
        a.push(value);
      }
    })
  })
  return a;
}

module.exports = choose_divisible_integer;
