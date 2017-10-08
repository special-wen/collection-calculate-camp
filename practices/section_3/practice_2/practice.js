function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.map(item =>{
    if (object_b.value.includes(item.key)) {
      let num = item.count;
      let n = parseInt(num/3);
      item.count = num - n;
    }})

  return collection_a;
}

module.exports = create_updated_collection;
