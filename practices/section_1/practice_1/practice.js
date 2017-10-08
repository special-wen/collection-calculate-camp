function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let a = [];
  collection_a.map(index=>{
    if(collection_b.indexOf(index) != -1)
      a.push(index);
  })
  return a;
}

module.exports = collect_same_elements;
