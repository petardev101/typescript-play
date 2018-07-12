// Sample A
declare var myPoint: { x: number, y: number }

// Sample B
interface Point {
  x: number
  y: number
}
declare var myPoint: Point


// class implementing interface

interface Cool {
  x: number
  y: number
  z: number
}

class MoreCool implements Cool {
  x: number
  y: number
  z: number // if missing one of these, incorrect implementation error
}

let cool: Cool = new MoreCool()
cool.x = 4 // any non-number type throws error
cool.y = 5
cool.z = 6

console.log(cool)


// crazy interfaces
// interface Crazy {
//   new (): {
//     hello: number
//   }
// }

// class CrazyClass implements Crazy {
//   constructor() {
//     return { hello: 123 }
//   }
// }

// const crazy = new CrazyClass()

let num = 123 // normal javascript
num = '123' // typescript can infer type info



