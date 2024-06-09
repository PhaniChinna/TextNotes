let EmployeName! : string  // declaration 
EmployeName  = "Phanindhar Reddy" // initilization 
EmployeName = "PavanKumar Reddy" // re-assignment

console.log(EmployeName)


 
var EmployeSalary! : Number // declaration 
EmployeSalary = 90000   // initilization 
EmployeSalary = 1200000  // re-assignment
console.log(EmployeSalary)

const EmployeGrade : string = "A+"



// let EmployeName! : string  // declaration 
// EmployeName  = "Phanindhar Reddy" // initilization 
// EmployeName = "PavanKumar Reddy" // re-assignment

// console.log(EmployeName)


 
// var EmployeSalary! : number // declaration 
// EmployeSalary = 90000   // initilization 
// EmployeSalary = 1200000  // re-assignment
// console.log(EmployeSalary)

// const EmployeGrade : string = "A+"


/* 
1) Basic syntax
interface start with aa capital letter 
example : firstName [camelCase]
*/

type Gender = "male" | "female" | "other"

interface Perason   {
    firstName : string,
    lastName : string ,
    contactNumber : number ,
    isMarried : Boolean,
    address : Address 
    gender: Gender

}


interface Address {
    address1 : string,
    address2 : string,
    pincode : number , 
    country : string 
    }


const p1 : Perason = {
    firstName :"Phanindhar Reddy",
    lastName : "Yarram",
    contactNumber : 9951032311,
    isMarried : false,
    address : {
        address1 : "NDL",
        address2 : "GNT" , 
        pincode : 518501 ,
        country : "India"
    },
    gender : "male"
} 


console.log(p1)


type Gender = "male" | "female" | "other"

interface Person {
    firstName : string,
    lastName :  string,
    contactNumber : number ,
    address : AddressData,
    gender : Gender
}


interface AddressData {
    address1 : string ,
    address2 : string,
    pinCode : number
}

const p1 : Person =  {
    firstName : "Phanindhar " ,
    lastName : "Reddy" , 
    contactNumber : 9951032311,
    address : {
        address1 : "NDL",
        address2 : "GNT",
        pinCode : 518501,
    },
    gender :"male"

}

console.log(p1)


type Transmission = "petrol" | "diesel" | "cng" | "electric" | "hybrid"  ;

class Car  {
    public color! : string;
    public transmissiomn! : Transmission;
    public price! : number;
    public brand! : string;
    constructor(color : string , transmissiomn : string , price : number , brand : string ) {
        this.color = color;
        this.transmissiomn = transmissiomn;
        this.price = price ;
        this.brand = brand;
    }

}


const car1 : Car = new Car("red" , "petrol" , 250000 , "Audi")

console.log(car1)