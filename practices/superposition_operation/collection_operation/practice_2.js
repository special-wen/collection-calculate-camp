'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let a = [];
  let num;
  collection.map(index=>{
    if(index%2 != 0){
      num = index*3+2;
      a.push(num);
    }
  })
  return a;
}

module.exports = hybrid_operation_to_uneven;

