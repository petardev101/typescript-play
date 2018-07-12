const nameToUppercase = (name: string) => name.toUpperCase()

console.log(nameToUppercase('turtle bean'))

const multiplyRandNumber = (number: number) => number * Math.random()

console.log(multiplyRandNumber(4))

const messyArray = ['something', 2, true, undefined, null];

const tupleExample: [number, string, string] = [24, 'cat', 'kobe'];

console.log({tupleExample})

// function with explicit return type of string
const sayMyName = (name: string): string => { // <= EXPLICIT return string
  return name
}

sayMyName('Matthew')

// use void if you're not returning anything OR you don't want to force a type
// const callBack = (name: string): void => console.log({ name })

// callBack('Tim')

// // ALSO
// const sayMyName2 = function sayMyName2(name: string): void {
//   callBack(name)
// } 

// If you don't have a return, you cannot have the type be void
// function myCallBack (name: string): void {
//   console.log(name)
  
//   return name
// }

// const sayMyName3 = function sayMyName3(name: string): void {
//   myCallBack(name)
// }

let randomList: any = ['fritz', true, 13, 'turtle bean', undefined, null, 'gus', 'hugo']

console.log(randomList)

// If you know array is all one type
let stringsArray: string[] = ['one', 'two', 'three']
let numbers: number[] = [1, 2, 3]

console.log({stringsArray}, {numbers})






