const arr = [1, 2, 3, 4, 5]

/* arr.forEach((item, i) => {
  if (item === 2) {
    console.log(i)
    // break;
    return;
  }
  console.log('执行了循环')
}) */

// 使用数组的 some 循环，寻找数组中符合条件的那一项，如果找到了，可以使用 return true 终止后续循环
/* arr.some((item, i) => {
  if(item === 2){
    console.log(i)
    return true
  }
  console.log('执行了循环')
}) */


Array.prototype.mysome = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var flag = callback(this[i], i)
    if (flag) {
      break;
    }
  }
}


arr.mysome((item, i) => {
  if (item === 3) {
    console.log(i)
    return true;
  }
  console.log('代码执行了')
})