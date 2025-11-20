// const sum =(a,b)=>{
//     console.log(a+b);
// }
// console.log(sum(2,4));
// let student={
//     name:"Arpit",
//     age:23,
//     math:88,
//     science:67,
//     english:33,
//     getavg(){
//         let avg=(this.math+this.science+this.english)/3;
//         console.log(avg);
//     }
// }
// student.getavg();
// console.log(student.name);
// console.log("heloo1");
// try{
//     console.log(a);
// }
// catch(err){
//     console.log("a is not defined");
//     console.log(err);
// }
// console.log("hello2");
// const sum=(a,b)=>{
//     return a+b;
// }
// const cube=(a)=>{
//     return a*a*a;
// }
// const pow=(a,b)=>{
//     return a**b;
// }
// console.log(sum(2,3));
// console.log(cube(2));
// console.log(pow(2,4));
// console.log("Hi")
// setTimeout( ()=>{
//     console.log("Arpit");
// },5000);
// console.log("Good Evening");
// let id=setInterval(()=>{
//     console.log("Arpit");
// },4000);
// const square=(n)=>{
//     return n*n;
// }
// console.log(square(5));
// let id=setInterval(()=>{
//     console.log("Hello World");
// },2000);
// setTimeout(()=>{
//     clearInterval(id);
//     console.log("Stop");
// },10000)
const even=(n)=>{
    if(n%2==0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(even(7));