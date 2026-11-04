"use strict";
// special data types in typescript
// any,unknown,void,arrays,mixed arrays(union)
Object.defineProperty(exports, "__esModule", { value: true });
//1. any => type checking ko disable kardeti hai . isse bachne ki koshish karo
let number = 90;
number = '90';
// 2. unknown => safer alternative to any. unknown ka matlab hai ke hame data type abhi nhi pata
let m = 'hello';
if (typeof m == 'string') {
    let c = m.indexOf('l');
    console.log(c);
}
// void => function kuch return nhi karta 
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Shariq");
//arrays
let num = [1, 2, 3, 4];
let b = [1, 2, 3, 4]; // alternative syntax
// mixed arrays
let c = [1, 'hello', 2, 'Shariq'];
//# sourceMappingURL=lesson2.js.map