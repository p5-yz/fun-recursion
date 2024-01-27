
function reverseStr (str) {
    //takes string as input 
    //get get last character of string 
    //return last character    
    console.log(str)
    if (str.length < 2)
    //console.log(reverseStr(str.slice(-1)))
        return str
    
    return str.slice(-1) + reverseStr(str.slice(0, -1))
} 


function sumDigits(num) { 
    

    let sum = 0
    array = String(num).split('')

    //const arr = String(num)
    if(num <= 9) { 
        return num ;
    } 
    for (let i = 0; i <array.length; i++) {
        sum += Number(array[i])
    }
    console.log(sum) 
    if(sum <= 9) return sum 
    else {
       return sumDigits(sum)
    }
 }

 function getFibonacci(fib) {
    //const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    if(fib < 2) return fib 
    else {
        return getFibonacci(fib-1) + getFibonacci(fib-2)
    }
 }

 function deepTotal(arr){
    function sum(arr, total){
        for (let i=0; i<arr.length; i++){
            if(!isNaN(arr[i])){
                total += Number(arr[i])   
            } else {
            return sum(arr[i],total)
            }
        }
        return total
    }
    return sum(arr,0)
 }
module.exports = {reverseStr, sumDigits, getFibonacci, deepTotal}