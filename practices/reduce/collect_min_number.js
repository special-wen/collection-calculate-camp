'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let min = collection.reduce((x,y)=>{
    return x<y?x:y;
  })
  return min;
}

module.exports = collect_min_number;

