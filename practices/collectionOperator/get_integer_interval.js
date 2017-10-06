'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let a=[],j = 0;
  if(number_a<number_b){
    for(let i = number_a;i<number_b+1;i++){
      a[j] = i;
      j++
    }
  }
  if(number_b<number_a){
    for(let i = number_a;i>number_b-1;i--){
      a[j] = i;
      j++;
    }
  }
  if(number_b == number_a){
    a[j] = number_b;
  }
  return a;
}


module.exports = get_integer_interval;

