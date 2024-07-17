let numbers=[67, 56, 28, 11, 79];
function sum(arr){
    let s = 0;
    for( let i = 0; i < arr.length; i++){
        s += arr[i];
    }
    return s;
}
let total = sum(numbers);
console.log("Tổng các số:", total);

function average(arr){
    let s = sum(arr);
    let aver = s / arr.length;
    return aver;
}
let a = average(numbers);
console.log("Trung bình cộng các số:", a);