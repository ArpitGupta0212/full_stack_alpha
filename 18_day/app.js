// console.log("Hello World");
// let x=5;
// let y=10;
// let output=`total is ${x+y} rupee.`
// console.log(output);
// console.log("sum :",x+y);
// 2
// let str="apple";
// if(str[0]==='a' && str.length>3){
//     console.log("safe");
// }else{
//     console.log("unSafe");
// }
// 3
// let x=12;
// switch(x){
//     case 12:console.log(x);
// }
// let firstName=prompt("Enter your firstName :");
// let lastName=prompt("Enter your lastName :");
// console.log(firstName+lastName);
// console.warn("this is warning");
// console.error("this is error");
// alert("Wow!");
// practise Questions
// let num=4;
// if(num%10==0){
//     console.log("Good");
// }else{
//     console.log("bad");
// }
// Take the user's name & age as input using prompts.
//  Then return back the following statement to the user as an alert (by substituting
//  their name & age) :
//  name is age years old
// let str=prompt("Enter your name:");
// let age=prompt("Enter your age:");
// alert(`Hi ${str} , you are ${age} year old`);
//  Qs3. Write a switch statement to print the months in a quarter.
//  Months in Quarter 1 : January, February, March
//  Months in Quarter 2 : April, May, June
//  Months in Quarter 3 : July, August, September
//  Months in Quarter 4: October, November, December
//  [Use the number as the case value in switch
// let x=2;
// switch(x){
//     case 1:console.log("January, February, March");
//     break;
//     case 2:console.log("April, May, June");
//     break;
//     case 3:console.log("July, August, September");
//     break;
//     default:console.log("October, November, December");
// }
// Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
//  length greater than 5.
//  For a given string print if it is golden or not
// let str="abhjgdwaj";
// if((str[0]=='A' || str[0]=='a') && str.length>5){
//     console.log("golden");
// }else{
//     console.log("golden not");
// }
// let x=9;
// let y=89;
// let z=104;
// if(x>y && x>z){
//     console.log(x);
// }else if(y>x && y>z){
//     console.log(y);
// }else{
//     console.log(z);
// }
// . Write a program to check if 2 numbers have the same last digit.
//  Eg : 32 and 47852 have the same last digit i.e. 
let n1=67;
let n2=79;
if(n1%10==n2%10){
    console.log("Last digit same ");
}else{
    console.log("Last digit not same ");
}