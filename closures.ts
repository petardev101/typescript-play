function outerFunction(arg) {
  var variableInOuterFunction = arg

  function bar() {
    console.log(variableInOuterFunction)
  }

  bar()
}

outerFunction('hello closure!')

function outerFunction2(arg) {
  var varFromOuter = arg
  return function() {
    console.log(varFromOuter)
  }
}

var innerFunc = outerFunction2('howdy Closurey-face!')

innerFunc()

// revealing module pattern
function createCounter() {
  let val = 0
  return {
    increment() { val++ },
    getVal() { return val }
  }
}

let counter = createCounter()
counter.increment()
console.log(counter.getVal()) // 1
counter.increment()
console.log(counter.getVal()) // 2

