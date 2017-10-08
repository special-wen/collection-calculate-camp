'use strict';
var rank_asc = function(collection){

  return collection.sort(sortNum);

};
function sortNum(a,b) {
  return a<b?1:-1
}

module.exports = rank_asc;
