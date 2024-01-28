const object = require('./reverse-string.js')

describe('Takes string and retruns it reveresed', () => {
    test('Takes string and returns string', () => {
      //arrange 
      const input = "a"  
      //act 

      const output = object.reverseStr(input) 
      console.log(output)
      //assert
        expect(typeof output).toBe("string") 
        
    }) 
    test('Returns empty string when passed empty string', () => {
        //arrange 
        const input = ""  
        //act 
  
        const output = object.reverseStr(input) 
        console.log(output)
        //assert
          expect(output).toBe("") 
          
      }) 

    test('Should return reversed of string with 2 characters', () => {
        //arranges
        const input = 'be'
        //act 
        output = object.reverseStr(input)
        //assert
        expect(output).toEqual('eb')
    }) 
    test ('Should return whole string in reverse order', () => {
        //arrange
        const input = "code"
        //act 
        const output = object.reverseStr('code')
        //assert 
        expect(output).toBe('edoc')
    })
}) 

describe('returns sum of digits in input number', () => {
    test('Takes number and returns number', () => {
      //arrange 
      const input =  1 
      //act 
      const output = object.sumDigits(input) 
      //assert
        expect(output).toBe(1) 
        
    }) 
    test('single digit when passed single digit', () => {
        const input = 9 
        const output = object.sumDigits(input)
        expect(output).toBe(9)
    }) 
    test('returns single digit when passed double digit', () => {
        const input = 11
        const output = object.sumDigits(input)
        expect(output).toBe(2)
    })

    test('Recursivley returns single when passed multi digits', () => {
        //arrange 
        const input =  66
        //act 
  
        const output = object.sumDigits(input)
    
        //assert
          expect(output).toBe(3) 
          
      }) 
}) 
describe('takes a number and returns the number at that point in the Fibonacci sequence', () => {
    test('returns 0 when passed 0', () => {
      //arrange 
      const input = 0
      //act 
      const output = object.getFibonacci(input) 
      //assert
        expect(output).toBe(0) 
        
    }) 
    test('if number is less than 2 should return correct fib number', () => {
        //arrange 
        const input = 1
        //act 
        const output = object.getFibonacci(input) 
        //assert
          expect(output).toBe(1) 
          
      }) 
      test('if number is 1 digit should return correct fib number', () => {
        //arrange 
        const input = 3
        //act 
        const output = object.getFibonacci(input) 
        console.log(output)
        //assert
          expect(output).toBe(2) 
          
      }) 
      test('if number is 2 digits should return correct fib number', () => {
        //arrange 
        const input = 10
        //act 
        const output = object.getFibonacci(input) 
        console.log(output)
        //assert
          expect(output).toBe(55) 
          
      }) 

})
describe('deepTotal: recursive function that totals an arbitrarily nested array of integers', ()=>{
      test.only('Should return 0 if empty array. Eg, [] ==> 0',()=>{
        // Arrange
        const empty = []
        const expectedValue = 0
        // Actual
        const actualValue = object.deepTotal(empty)
        // Assert
        expect(expectedValue).toBe(actualValue)
      })
      test.only('Should return the total of a (non nested) array of two numbers. Eg, [1,2] ==> 3',()=>{
        // Arrange
        const arrayTwoNumbers = [1,2]
        const expectedValue = 3
        // Actual
        const actualValue = object.deepTotal(arrayTwoNumbers)
        // Assert
        expect(expectedValue).toBe(actualValue)
      })
      test.only('Should return the total of a nested array. Eg, [[1,2]] ==> 3',()=>{
       // Arrange
       const nestedArrayTwoNumbers = [[1,2]]
       const expectedValue = 3
       // Actual
       const actualValue = object.deepTotal(nestedArrayTwoNumbers)
       // Assert
       expect(expectedValue).toBe(actualValue)    
      })
      test.only('Should return the total of a non nested and nested array. Eg, [1,2,[3,4]] ==> 10', ()=>{
         // Arrange
       const nestedAndNonNestedArrayTwoNumbers = [1,2,[3,4]]
       const expectedValue = 10
       // Actual
       const actualValue = object.deepTotal(nestedAndNonNestedArrayTwoNumbers)
       // Assert
       expect(expectedValue).toBe(actualValue)    
      })
})
describe('deepIncludes: Implement a recursive function that determines if an array includes a particular value at any level of nesting.', ()=>{
  test.only('Should return false if array empty', ()=>{
    // Arrange
    const empty = []
    const isFalse = false
    // Actual
    const actual = object.deepIncludes(empty)
    // Assert
    expect(isFalse).toBe(actual)
  })
  // Should return false if value (string or number) is not in array. Eg, 3 is not in [1,2] 
  // Should return true if value  (string or number) is in array. Eg, 1 is in [1,2]
  // Should return true if value is in nested array. Eg, 3 is in [1,2,[3,4]]
  test.only(' Should return false if value (string or number) is not in array. Eg, 3 is not in [1,2]', ()=>{
    // Arrange
    const nonEmpty = [1,2]
    const isFalse = false
    const valueNotInArray = 3
    // Actual
    const actual = object.deepIncludes(nonEmpty, valueNotInArray)
    // Assert
    expect(isFalse).toBe(actual)
  }) 

  test.only('Should return true if value  (string or number) is in array. Eg, 1 is in [1,2]', ()=>{
    // Arrange
    const nonEmpty = [1,2]
    const isFalse = true
    const valueIsInArray = 2
    // Actual
    const actual = object.deepIncludes(nonEmpty, valueIsInArray)
    // Assert
    expect(isFalse).toBe(actual) 
  })

  test.only('Should invoke function twice if nested array. ', ()=>{
    // Eg, 
    //  [1,2,[3,4]] (with this nested array the function..() will call twice. 
    //  Once for the initial call and the other for the recursive call) 

    // Arrange
    const empty = [1,2,[3,4]]
    const spy = jest.spyOn(object, 'deepIncludes')
    const isTrue = object.deepIncludes(empty, 4)
    
    // Assert
    expect(isTrue).toBe(true)
    expect(spy).toHaveBeenCalledTimes(2)
    spy.mockRestore()
    
  })
})