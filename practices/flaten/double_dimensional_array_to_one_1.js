'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let a = [];
  for(let i of collection){
    a = a.concat(i);
  }
  return a;
}

module.exports = double_to_one;
