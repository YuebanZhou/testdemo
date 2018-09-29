let obj = {
  name: '尼古拉斯',
  age: 10,
  gender: '吸血鬼男',
  address: '黑暗城堡'
}
// const {name,age}=obj

/* const name123 = obj.name
const age456 = obj.age */
// 在解构赋值中，使用 : 为解构出来的属性重新改名
const { name: name123, age: age456 } = obj

// console.log(name123, age456)

console.log(name)