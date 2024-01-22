
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

//function sumDigits (num) {
    //console.log(num)
// takes multiple digits and returns sum of digits
//convert numbers to string  
//let sum = 0 
//const string = String(num)

//for (let i=0; i < string.length; i++) {
    //sum += Number(string[i])

//} 
//if sum of digits > 9 
//let counter = 0
//if(counter < String(num).length) return 0

//const string = String(num)
//console.log(sumDigits(string.slice(0,-1)))
//return sumDigits(string.slice(0,-1))
//return sum
//} 

function sumDigits(num) { 
    

    let sum = 0
    array = String(num).split('')

    //const arr = String(num)
    let n = num / 10
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




module.exports = {reverseStr, sumDigits}