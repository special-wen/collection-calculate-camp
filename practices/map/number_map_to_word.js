'use strict';
var number_map_to_word = function(collection){
  let a = [];
  collection.map(index=>{
    a.push(letter(index));
  })
  return a;
};

function letter(num) {
  let str = '';
  let small = 'a';
  while (num>0){
    let m = num%26;
    if(m == 0){
      m = 26;
    }
    str = String.fromCharCode(small.charCodeAt(0)+m-1)+str;
    num = (num-m)/26;
  }
  return str;
}


module.exports = number_map_to_word;
