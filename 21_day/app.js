// const student={
//     name:"Arpit",
//     class:"B.tech",
//     age:22
// };
// console.log(student);
// const post={
//     username:"Adi",
//     content:"this is my first post",
//     likes:34,
//     reposts:40,
//     tags:["@arpit","@anurag"],
//     1:"a"

// };
// console.log(post);
// console.log(post.likes);
// console.log(post["content"]);
// let a="reposts";
// console.log(post[a]);
// console.log(post[1]);
// post.dislike=3;
// console.log(post);
// delete post.dislike;
// console.log(post);
// const studentInfo={
//     aman:{
//         grade:"A",
//         city:"Agra"
//     },
//     shailu:{
//         grade:"O",
//         city:"U.p"
//     }
// }
// const student=[
//     {
//         name:"Arpit",
//         grade:"A",
//         city:"Agra"
//     },
//     {
//         name:"Adi",
//         grade:"A++",
//         city:"Mathura"        
//     }
// ]
// let num=Math.random();
//      num*=5;
// console.log(Math.ceil(num)+20);
let user =prompt("Choose Maximum range");
let ran=Math.ceil(Math.random()*user);
console.log(ran);
let guess=prompt("Enter number");
let flag=false;
while(true){
    if(guess<ran){
        alert(" you are quit ");
    }
    if(guess==ran){
        flag=true;
    }
}
if(flag){
    alert("Congratulations your guess is right ");
}
