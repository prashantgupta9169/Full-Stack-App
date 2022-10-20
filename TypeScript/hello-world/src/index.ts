let age:number =20;
let user : [number,string]=[62,'Prashant']

console.log(user)

enum Size {Small=1,Medium,large};
let mySize :Size =Size.Medium;
console.log(mySize)

function calculateTax(income:number,taxYear=2022):number{
    if(taxYear<2022)
        return income*1.2;
    return income*1.3;
}

let ans:number=calculateTax(10_100,2021)
console.log(ans);

type Employee={
    readonly id:number,
    name:string,
    retire:(date:Date)=>void
}
let employee:Employee ={
    id:1,
    name:'Prashant Gupta',
    retire:(date:Date)=>{
        console.log(date);
    }
};

// Union Type

function KgtoLbs(weight:number | string):number{
    if(typeof weight=='number')
        return weight*2.2;
    return parseInt(weight)*2.2;
}

let ans1=KgtoLbs(10);
let ans2=KgtoLbs('20');
console.log(ans1,ans2);

// Literals Type
type Quantity=50|100;
let quantity:Quantity=50;