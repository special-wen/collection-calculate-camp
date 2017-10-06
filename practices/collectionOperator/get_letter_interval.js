'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let a = [];
  if(number_a<number_b){
    for(let i = number_a;i<number_b+1;i++){
      a.push(letter(i));
    }
  }
  if(number_b<number_a){
    for(let i = number_a;i>number_b-1;i--){
      a.push(letter(i));
    }
  }
  if(number_b == number_a){
    a.push(letter(number_a));
  }
  return a;
}

function letter(num){
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
module.exports = get_letter_interval;
