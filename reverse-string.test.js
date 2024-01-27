const {reverseStr, sumDigits, getFibonacci} = require('./reverse-string.js')
describe('Takes string and retruns it reveresed', () => {
    test('Takes string and returns string', () => {
      //arrange 
      const input = "a"  
      //act 

      const output = reverseStr(input) 
      console.log(output)
      //assert
        expect(typeof output).toBe("string") 
        
    }) 
    test('Returns empty string when passed empty string', () => {
        //arrange 
        const input = ""  
        //act 
  
        const output = reverseStr(input) 
        console.log(output)
        //assert
          expect(output).toBe("") 
          
      }) 

    test('Should return reversed of string with 2 characters', () => {
        //arranges
        const input = 'be'
        //act 
        output = reverseStr(input)
        //assert
        expect(output).toEqual('eb')
    }) 
    test ('Should return whole string in reverse order', () => {
        //arrange
        const input = "code"
        //act 
        const output = reverseStr('code')
        //assert 
        expect(output).toBe('edoc')
    })
}) 

describe('returns sum of digits in input number', () => {
    test('Takes number and returns number', () => {
      //arrange 
      const input =  1 
      //act 
      const output = sumDigits(input) 
      //assert
        expect(output).toBe(1) 
        
    }) 
    test('single digit when passed single digit', () => {
        const input = 9 
        const output = sumDigits(input)
        expect(output).toBe(9)
    }) 
    test('returns single digit when passed double digit', () => {
        const input = 11
        const output = sumDigits(input)
        expect(output).toBe(2)
    })

    test('Recursivley returns single when passed multi digits', () => {
        //arrange 
        const input =  66
        //act 
  
        const output = sumDigits(input)
    
        //assert
          expect(output).toBe(3) 
          
      }) 
}) 
describe('takes a number and returns the number at that point in the Fibonacci sequence', () => {
    test('returns 0 when passed 0', () => {
      //arrange 
      const input = 0
      //act 
      const output = getFibonacci(input) 
      //assert
        expect(output).toBe(0) 
        
    }) 
    test('if number is less than 2 should return correct fib number', () => {
        //arrange 
        const input = 1
        //act 
        const output = getFibonacci(input) 
        //assert
          expect(output).toBe(1) 
          
      }) 
      test('if number is 1 digit should return correct fib number', () => {
        //arrange 
        const input = 3
        //act 
        const output = getFibonacci(input) 
        console.log(output)
        //assert
          expect(output).toBe(2) 
          
      }) 
      test('if number is 2 digits should return correct fib number', () => {
        //arrange 
        const input = 10
        //act 
        const output = getFibonacci(input) 
        console.log(output)
        //assert
          expect(output).toBe(55) 
          
      }) 

})