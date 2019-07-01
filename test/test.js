var myobj={
    "2019-06-15":7,
    "2019-06-31":11,
    "2019-05-04":1,
    "2019-05-20":2,
    "2019-06-09":4,
}
console.log(myobj)
var keyArr=[];
for(key in myobj) {
    keyArr.push(key)
}

console.log(keyArr.sort())
// console.log(myobj.sort())