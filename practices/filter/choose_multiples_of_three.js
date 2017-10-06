'use strict';

function choose_multiples_of_three(collection) {
  let a=[]
  //在这里写入代码
  collection.map(index=>{
    if(index%3 == 0){
      a.push(index)
    }
  })
  return a;
}

module.exports = choose_multiples_of_three;
