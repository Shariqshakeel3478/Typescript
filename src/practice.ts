// Task1

interface Employee {

    id:number,
    name:string,
    email:string,
    salary:number,
    department?:string,
    isActive:boolean

}


let employee1:Employee = {
    id:1,
name:"Shariq",
email:"shariq123",
salary:20000,
department:"IT",
isActive:true

}

let employee2:Employee = {
    id:2,
name:"Suleman",
email:"suleman123",
salary:20000,
isActive:true

}


// task2

type Products = {
    id: number,
name: string,
price: number,
description?:string,
inStock: boolean
}


let product1:Products = {
id:1,
name:"bucket",
price:2000,
description:'small bucket',
inStock:true
}


let product2:Products = {
id:2,
name:"basket",
price:2000,
inStock:true
}

let product3:Products = {
id:3,
name:"bat",
price:2000,
description:'small bucket',
inStock:true
}

product3.price = 4000


console.log(product3)