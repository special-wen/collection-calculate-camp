function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let a = [];
  let b = object_b.value;

  collection_a.map(index=>{
    if(b.indexOf(index.key)!= -1)
      a.push(index.key)
  })
  return a;
}

module.exports = collect_same_elements;
