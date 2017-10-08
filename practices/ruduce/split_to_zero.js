'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let a = [];
  let num;
  //a.push(number);
  while (number>=0){
    a.push(parseFloat(number.toFixed(1)));
    num = parseFloat(number.toFixed(1));
    number = number-interval;
    if(num >0 && number<0){
      a.push(parseFloat(number.toFixed(1)));
    }
  }
  return a;
}

module.exports = spilt_to_zero;
