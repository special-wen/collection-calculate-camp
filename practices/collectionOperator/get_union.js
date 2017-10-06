'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let union = Array.from(new Set(collection_a.concat(collection_b)));
  return union;
  // let a = [];
  // for(let i = 0;i<collection_a.length;i++){
  //   a.push(collection_a[i]);
  // }
  // for(let i = 0;i<collection_b.length;i++){
  //   for (let j = 0;j<collection_a;j++){
  //     if(collection_b[i] != collection_a[j]){
  //       a.push(collection_b[i]);
  //     }
  //   }
  // }
  // return a;
}



module.exports = get_union;

