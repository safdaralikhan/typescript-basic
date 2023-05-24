
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


// function getThree(x:string | number[]){
//     return x.slice(0,3)
// }

// console.log(getThree("hello"))
// console.log(getThree([1,2,4,5,6]))


// GENERIC 

// function Anything <T>(arg: T):T{
//     console.log(arg)
//     return arg

// }

// console.log(Anything("hello"))


// interface HasAGE{
//     age:number
// }

// function getOlderst<T extends HasAGE>(people:T[]):T{

// return people.sort((a,b)=>b.age-a.age)[0]
// }

// const people:HasAGE[] = [{age:30},{age:40},{age:50}]

// interface Player {
//     name:string;
//     age:number;
// }

// const Players: Player[]=[
//     {name:"safdr",age:20},
//     {name:"ali",age:25},
//     {name:"jawad",age:23},

// ]

// ASSERTION 
// jo obj return ho raha ha wo is type ka hai hum ny zabardati bol diya 
// const Person = getOlderst(Players) as Player

// GENERIC 
// const Person = getOlderst(people)
// Person.age

// interface IPost{
//     title:string;
//     id:number;
//     description:string;

// }

// interface IUser{
//     name:string;
//     id:number;
//     age:number;

// }

// const fetchPostData = async (path:string): Promise<IPost[]>=>{
//     const response = await  fetch(`https://example.com${path}`);
//     return response.json();
// }

// const fetchUserData = async (path:string): Promise<IUser[]>=>{
//     const response = await  fetch(`https://example.com${path}`);
//     return response.json();
// }

// (async ()=>{
//     const posts = await fetchPostData("/posts")
//     posts[0].description
// })();


// (async ()=>{
//     const user = await fetchUserData("/user")
//     user[0].age
// })();


// 2ND METHD 

// const fetchData = async <ResultType>(path:string): Promise<ResultType>=>{
//     const response = await  fetch(`https://example.com${path}`);
//     return response.json();
// }


// (async ()=>{
//     const users = await fetchData<IUser[]>("/users")
//     users[0].age
// })();

// STRUCTURAL OR DUCK TYPE 
// jb 2 obj ka shape same hota ha to us ko ek he obj type  samjty gai 
// interface ICredential {
//     name: string;
//     password: string;
//     Admin?: boolean

// }

// function Login(Credential:ICredential){
//     return true
// }


// const user  ={

//     name:"safdar",
//     password:"1234",
//     Admin:true
    
// }

// Login(user)



// OBJ K ANDR FUNCTION BANAY KA METHOD 
// interface IAuth{
//     username:string,
//     password:string,
//     Login(username:string,password:string):void
// }

// const Auth :IAuth = {
//     username:"safdar",
//     password:"secret",
//     Login(username:string, password:string){

//     }
// }


// INFERENCE 
// jb hum varible ko direct koi number ya string assign krty hai us ko inference kehty ha 
let num = 2
let num2 = "safdar"