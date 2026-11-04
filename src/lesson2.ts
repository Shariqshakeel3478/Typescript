// special data types in typescript
// any,unknown,void,arrays,mixed arrays(union)


//1. any => type checking ko disable kardeti hai . isse bachne ki koshish karo

let number:any = 90
number = '90'
 


// 2. unknown => safer alternative to any. unknown ka matlab hai ke hame data type abhi nhi pata

let m:unknown = 'hello'

if(typeof m =='string'){
   let c = m.indexOf('l')
   console.log(c)
}

// void => function kuch return nhi karta 

function greet(name:string){
   console.log(`Hello ${name}`)
}

greet("Shariq")


//arrays

let num:number[] = [1,2,3,4]
let b:Array<number> = [1,2,3,4] // alternative syntax


// mixed arrays


let c:(number | string)[] = [1,'hello',2,'Shariq']


