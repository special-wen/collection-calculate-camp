'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let a = [];
  let j = 0;
 if(number_a<number_b){
   for(let i = number_a;i<number_b+1;i++){
     if(i % 2 == 0){
       a[j] = i;
       j++;
     }
   }return a;
 }
 if(number_b<number_a){
   for(let i = number_a;i>number_b-1;i--){
     if(i % 2 == 0){
       a[j] = i;
       j++
     }
   }
   return a;
 }
 if(number_b == number_a && number_b%2 ==0){
   a[j] = number_b;
   return a;
 }
 if(number_b == number_a && number_b % 2 != 0){

   return [];
 }
}

module.exports = get_integer_interval_2;
