'use strict';

function find_first_even(collection) {
  //在这里写入代码
  // for(let i of collection){
  //   if(i%2 == 0)
  //     return i;
  // }
  return collection.find(n=>{
    if(n%2 == 0)
      return n;
  })


}

module.exports = find_first_even;

