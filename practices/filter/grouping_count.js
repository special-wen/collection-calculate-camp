'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let obj={};
  let a=[];let count=0;
  collection.filter(value=>{
    if(a.indexOf(value) == -1){
      a.push(value);
    }

    a.map(index=>{
      for(let n of collection) {
        if (index == n)
          count++;
      }
        obj[index] = count;
        count = 0;
    })
  });
  return obj;
}

module.exports = grouping_count;
