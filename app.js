// let a  = 1;
// let b  = 1;
// function calcultation(a:number,b:number){
//     return a + b
// }
// console.log(Calcultation(a,3))
// function getTotal(numbers:Array<number>){
//     return numbers.reduce((acc,item)=>{
//         return acc + item
//     },0)
// }
// console.log(getTotal([1,2,3]))
// TYPE ALIAS or custom type banany k liye 
// type User = {
//     name:string;
//     age:number
//     address?:string  // ? is k a mtlab ha k hum address undefined b ho sakta hai
// }
// const user :User={
//     name:"safdar",
//     age:20,
// }
// function Login(userData:User):User{  //void by defualt lagta hai k function kuch return nhe kry ga
//     return userData;
// }
// console.log(Login(user))
// type ID = number | string;  // | ya line or ki tara kaam krta ha k id number b ho sakta ha or string b
// const userId: ID = "123"
// interface Transection {
//     payerAccount: number;
//     payerAcnt : number
// }
// // TYPE DEFINE KIYE 
// interface BankAccount {
//     accountNumber:number,
//     accountHolder: string;
//     balance:number;
//     isActive:boolean;
//     transaction: Transection[]
// }
// const transection1: Transection ={
//     payerAccount: 123,
//     payerAcnt:1233
// }
// interface Book {
//     name: string;
//     price: number
// }
// interface Ebook extends Book {
//     // name: string;
//     // price: number
//     fileSize:number;
//     format:string
// }
// interface Audio extends Ebook  {
//     // name: string;
//     // price: number;
//     // fileSize:number;
//     // format:string;
//     duration:number
// }
// const book: Audio = {
//     name: "hello",
//     price: 200,
//     fileSize:5,
//     format: "pdf",
//     duration:5
// }
// UNIONS  OR KI TARA KAAM KRTA HA
// type ID = number | String;
// NARROWING 
// function PrintId(id: ID){
//     if (typeof id == "string"){
//         console.log(id.toUpperCase())
//     }
// }
// PrintId("safdar")
function getThree(x) {
    return x.slice(0, 3);
}
console.log(getThree("hello"));
console.log(getThree([1, 2, 4, 5, 6]));
