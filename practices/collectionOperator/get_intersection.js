'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let c = [],m = 0;
  for(let i = 0;i<collection_b.length;i++){
    for(let j = 0;j<collection_a.length;j++){
      if(collection_b[i] == collection_a[j]){
        c[m] = collection_b[i];
        m++;
      }
    }
  }
  return c;
}

module.exports = get_intersection;
