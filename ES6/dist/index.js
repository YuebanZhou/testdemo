"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = "Bread and Dream";
var greeting = "hello " + name;
{
  // let声明变量的作用域就是块作用域
  // ES5没有块作用域，只有函数作用域和全局作用域
  var a = "ES6";
  var b = "ES5";
}
console.log(b);
//console.log(a);报错获取不到a

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i); //10个10
  }, 0);
}

var _loop = function _loop(_i) {
  setTimeout(function () {
    console.log(_i); //0到9
  }, 0);
};

for (var _i = 0; _i < 10; _i++) {
  _loop(_i);
}

var tmp = "bread and dream";
if (true) {
  //tmp = "dream or bread";报错
  // let对tmp声明，导致tmp绑定了当前整个作用域，let临时死区导致不能在声明前使用
  // 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取。
  // 只有等到声明变量的那一行代码出现，才可以获取和使用该变量
  var _tmp = void 0;
}

// 在相同的作用域内，let声明变量只允许声明一遍
function demo() {
  var a = "bread ang dream";
  var a = "dream or bread";
}
// 报错
// function demo() {
//   let a = "bread and dream";
//   var a = "dream or bread";
// }
// 报错
// function demo() {
//   let a = "bread and dream";
//   let a = "dream or bread";
// }
demo();

// 不能在函数内部重新声明参数
//报错
// function demo1(arg) {
//   let arg;
// }
//demo1();
function demo2(arg) {
  {
    var _arg = void 0; //不报错
  }
}
demo2();

//const Person;//报错，必须初始化
var Person = "bread ang dream";
var Person2 = "no";
//Person2='dream or bread';//报错，不能重新赋值

if (true) {
  var MIN = 5;
}
//MIN; //报错，const和let类似，支持块作用域

// const声明的常量也是不提升，且存在暂时性死区
if (true) {
  //console.log(MIN); //报错
  var _MIN = 5;
}

// 如果声明的常量是一个对象，对象本身不允许赋值，但是对象的属性可以赋值
var obj = {};
obj.a = "xiao hua";
console.log(obj.a);

var Animal = function () {
  function Animal(name, age) {
    _classCallCheck(this, Animal);

    this.name = name;
    this.age = age;
  }

  _createClass(Animal, [{
    key: "setSex",
    value: function setSex(_sex) {
      this.sex = _sex;
    }
  }]);

  return Animal;
}();
