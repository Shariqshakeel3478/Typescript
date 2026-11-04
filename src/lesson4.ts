// union types,Literal types, Type narrowing, Type Guards

// union types

let id:string | number = 101

console.log(id)

// union types with arrays

let numbers:(string | number)[] =[1,'shariq']


// Literal types
type taskStatus = "pending" | "completed" | "in-progress" ;
let task:taskStatus = "pending"
