function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let a = letterTable(collection_a);
  createCollection(a, object_b);
  return a;
}
function letterTable(collection) {
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
function createCollection(a,b) {
  let objectB = b.value;

  a.map(element => {
    if (objectB.includes(element.key))
      if (element.count >= 3) element.count -= parseInt(element.count / 3);
  });

  return a;
}
module.exports = create_updated_collection;
