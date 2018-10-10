//codePointAt()
//JavaScript中"𠮷a"识别为三个字符
//codePointAt方法在第一个字符上，识别出𠮷
let s1="𠮷a";
console.log(s1.codePointAt(0));//134071
console.log(s1.codePointAt(1));//57271
console.log(s1.codePointAt(2));//97