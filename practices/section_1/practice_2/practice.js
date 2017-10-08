function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let a = [];
  let b = [];
  for(let i of collection_b){
    b = b.concat(i);
  }
  collection_a.map(index=>{
    if(b.indexOf(index) != -1)
      a.push(index);
  })
  return a;
}

module.exports = collect_same_elements;
