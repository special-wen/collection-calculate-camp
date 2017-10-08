'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let length = collection.length;
  let low = Math.floor((length-1)/2);
  let high = Math.ceil((length-1)/2);
  let median = collection[low]+collection[high];
  //let median = parseInt(a[low])+parseInt(a[high]);
  return letter(Math.ceil(median/2));
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
module.exports = median_to_letter;
