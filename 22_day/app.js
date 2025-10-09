let x=7;
let arr=[1,2,8,9];

function check_large(x,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>x){
            console.log(arr[i]);
        }
    }
}
check_large(x,arr);