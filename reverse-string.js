const object = {
    sumDigits,
    reverseStr,
    getFibonacci,
    deepTotal,
    deepIncludes,
    countObjects
}
function reverseStr (str) {
    //takes string as input 
    //get get last character of string 
    //return last character    
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

 function deepTotal(array){
    function sum(array, total){
        for (let i=0; i<array.length; i++){
            if(Number(array[i])){
                total += +(array[i])  
            } else {
            total = sum(array[i],total)
            }
        }
        return total
    }
    return sum(array,0)
 }

 function deepIncludes(array, value){
    for (let i=0; i<array.length; i++){
        if (!Array.isArray(array[i])){
            if (array[i] === value){
                return true
            }
        } else {
            return this.deepIncludes(array[i], value)
        }    
    }
    return false
 }

 function countObjects(){

 }
// module.exports = {reverseStr, sumDigits, getFibonacci, deepTotal, deepIncludes}
module.exports = object