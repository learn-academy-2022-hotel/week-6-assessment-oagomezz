// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
describe("peopleInfo", () => {
  it("returns a sentence of the object", () => {
    expect(peopleInfo(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Method: create a func peopleInfo that will take an array of objects and return a sentence using string interpolation with the information of the object extracted using object.value syntax. Then use the map function to iterate through the array and splice to seperate the strings by the spaces using split(" "). Use splice to cut the words that need to be capitalized by the 
// Input: array of objects
// Output: array of strings 
const peopleInfo = (array) => {
  //     let seperatedName = array.map((value) => value.name.split(" "))
  //     let mergeArray = seperatedName.flat()
  //    console.log(mergeArray.map((value) => value.charAt(0).toUpperCase()))
  
      // .map((value) => value.name.charAt(0).toUpperCase())
  
      let stringValue = array.map((value) => `${value.name} is ${value.occupation}.`)
      // console.log(stringValue)
      let spreadString = stringValue.map(value => value.split(" "))
      console.log(spreadString)
      for(let i = 0; i < array.length; i++){
      let firstArray = spreadString[i]
          let oneString = firstArray.map((value) => {
            if(value === firstArray[0] || value === firstArray[1]){
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
            else{
                return value 
            }  
          })
          spreadString[i] = oneString.join(' ')
      }
          // Create loop
          return spreadString
          // 
      }
      console.log(peopleInfo(people))
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
describe("elRemainder", () => {
  it("returns the remainder of the element", () => {
    expect(elRemainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(elRemainder(hodgepodge2)).toEqual([ 2, 1, -1])
  })
})
// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
// Method: Create a func elRemainder that returns the remainders of the elements. Use filter and pair it with conditional statement that contains a modulo to return the remainder of the values that are divisible by 3. 
// Input: array of mixed values
// Output:array of numbers => filter using modulo to return remainders
const elRemainder = (array) => {
  // let filteredArray = []
 let remainderArray = array.filter(value => typeof value  === 'number')
 return remainderArray.map(value => value % 3)
}
console.log(elRemainder(hodgepodge1))
console.log(elRemainder(hodgepodge2))
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubedNumSum", () => {
  it("returns the sum of the cubed numbers", () => {
    expect(cubedNumSum(cubeAndSum1)).toEqual(99)
    expect(cubedNumSum(cubeAndSum2)).toEqual(1125)
  })
})
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
// Method: Create a func named cubedNumSum that takes in an array use map to iterate through the array in order to cube the individual elements. Use reduce to retrieve the sum of the array. 
// Input: Array of numbers 
// Output: Number

const cubedNumSum = (array) => {
  let cubedArray = array.map((value) => value ** 3)
   return cubedArray.reduce((a,b) => a + b)
 }
 console.log(cubedNumSum(cubeAndSum1))
 console.log(cubedNumSum(cubeAndSum2))