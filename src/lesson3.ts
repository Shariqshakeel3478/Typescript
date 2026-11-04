// objects
//inference
// const employee ={
//     name:"Shariq",
//     age:21,
//     isEmployeed:true
// }

//annotation

const company:{
    name:string,
    createdOn:number,
    isActive:boolean
} ={
    name:"Payfast",
    createdOn:2017,
    isActive:true
}



// type aliases => reusable

type Employee ={
    name:string,
    age:number
}

let employee1:Employee = {
name:"Shariq",
age:21
}


//optional properties => ?

type Car = {
   readonly name:string,
    modelYear:number
    available?:boolean
}


let car1:Car ={
    name:"Mehran",
    modelYear:2007
}


//readOnly => only works on type aliases


let car2:Car={
    name:"Toyota",
    modelYear:2015
}


// car2.name="honda" // throwing error




// type vs interface

// dono objects ke structure define karte hain
// interface => mostly for objects , use extends to inherit, cannot support union types
// type => objects and other types , & for combine, support union types





// homework