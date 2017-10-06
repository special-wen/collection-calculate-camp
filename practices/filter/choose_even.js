'use strict';

function choose_even(collection) {
  let a = [];
  //在这里写入代码
  collection.map(index=>{
    if(index%2 == 0){
      a.push(index);
    }
  })
  return a;
}

module.exports = choose_even;
