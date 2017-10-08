'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let sum = collection.reduce((a,b)=>{
    return a+b;
  })
  let length = collection.length;
  let num =Math.ceil(sum/length);
  return letter(num);
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


module.exports = average_to_letter;

