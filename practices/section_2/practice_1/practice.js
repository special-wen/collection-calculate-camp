function count_same_elements(collection) {
  //在这里写入代码
  let a = [];
  let value;
  let count;
  let length = collection.length;
  let index = 0;
  while (index<length){
    value = collection[index];
    let m =collection.lastIndexOf(value);
    count = m-index+1;
    a.push({
      key:""+value,
      count:count
    });
    index = m+1;
  }
  return a;
}


module.exports = count_same_elements;
