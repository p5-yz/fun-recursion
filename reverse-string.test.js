const {reverseStr, sumDigits} = require('./reverse-string.js')
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
        //arrange 
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
      console.log(output)
      //assert
        expect(output).toBe(1) 
        
    }) 
    test('Return sum when passed multiple digits', () => {
        //arrange 
        const input =  123
        //act 
  
        const output = sumDigits(input) 
        console.log(output)
        //assert
          expect(output).toBe(6) 
          
      }) 
})