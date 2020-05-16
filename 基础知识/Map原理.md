一、用数组存放 数据可以存放任意类型解决 map key 有其他的类型
```js
function map(){
  const result = [];
  const findIndex = function(key){
    let target = result.filter((item)=>item.key === key)
    return target.length === 0 ? -1 : target[0].id
  }
  this.set = function(key,value){
    let index = findIndex(key);
    if(index === -1){
      result.push({
        id: result.length,
        key,
        value
      })
    }else{
      target[index].value = value;
    }
    return value;

  }
  this.get = function(key){
    let index = findIndex(key);
    return index === -1 ? undefined : target[index].value;
  }
}
```