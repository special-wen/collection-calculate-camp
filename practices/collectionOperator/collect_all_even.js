'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let array = [];
  let j = 0;
  for(let i = 0;i<collection.length;i++){
    if(collection[i]%2 == 0){
      array[j] = collection[i];
      j++;
    }
  }
  return array;
}



module.exports = collect_all_even;
