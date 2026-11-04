"use strict";
// objects
//inference
// const employee ={
//     name:"Shariq",
//     age:21,
//     isEmployeed:true
// }
Object.defineProperty(exports, "__esModule", { value: true });
//annotation
const company = {
    name: "Payfast",
    createdOn: 2017,
    isActive: true
};
let employee1 = {
    name: "Shariq",
    age: 21
};
let car1 = {
    name: "Mehran",
    modelYear: 2007
};
//readOnly => only works on type aliases
let car2 = {
    name: "Toyota",
    modelYear: 2015
};
// car2.name="honda" // throwing error
// type vs interface
// dono objects ke structure define karte hain
// interface => mostly for objects , use extends to inherit, cannot support union types
// type => objects and other types , & for combine, support union types
// homework
//# sourceMappingURL=lesson3.js.map