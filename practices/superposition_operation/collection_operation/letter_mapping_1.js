'use strict';

function even_to_letter(collection) {
  let a = [];

  //在这里写入代码
  collection.map(index=>{
    if(index%2 == 0)
      a.push(letter(index));
  })
  return a;
}
function letter(num) {
  var str="";
  var small = 'a';
  while (num > 0){
    var m = num % 26;
    if (m == 0){
      m = 26;
    }
    str = String.fromCharCode(small.charCodeAt(0) + m-1) + str;
    num = (num - m) / 26;
  }
  return str;
}

module.exports = even_to_letter;
