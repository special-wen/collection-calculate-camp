'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let a = [],b = [];
  for(let i of collection){
    a = a.concat(i);
  }
  for(let i in a){
    if(i == a.indexOf(a[i])){
      b.push(a[i]);
    }
  }
  return b;
}

module.exports = double_to_one;
