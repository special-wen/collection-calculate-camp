function count_same_elements(collection) {
  //在这里写入代码
  let length = collection.length;
  let letter = collection[length-1].split('-');
  let d = letter[0];
  let num = letter[1];
  let a=[];

  collection.pop();

  let index = 0;
  let value,count;
  while (index<length-1){
    value = collection[index];
    let m =collection.lastIndexOf(value);
    count = m-index+1;
    a.push({
      key:""+value,
      count:count
    });
    index = m+1;
  }
  a.push({
    key:""+d,
    count:parseInt(num)
  })
  return a;

}

module.exports = count_same_elements;
