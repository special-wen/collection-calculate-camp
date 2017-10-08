'use strict';

function find_last_even(collection) {
  //在这里写入代码
  collection.reverse();
  return collection.find(n=>{
    if(n%2 == 0)
      return n;
  })
}

module.exports = find_last_even;
