// type check by id
type idDisplay = {
  id: string,
  display: string
}

const list: idDisplay[] = [
  {
    id: 'foo',
    display: 'Foo Select'
  },
  {
    id: 'bar',
    display: 'Bar Select'
  }
]

const fooIndex = list.map(i => i.id).indexOf('foo')
console.log(fooIndex)

// mutations are across all references
// var foo = {}
// var bar = foo

// foo.baz = 123
// console.log(foo.baz)

let someGlobal: undefined


if (typeof someGlobal !== 'undefined') {
  console.log(someGlobal)
}

function toInt(str: string): { valid: boolean, int?: number } {
  const int = parseInt(str);
  if (isNaN(int)) {
    return { valid: false };
  }
  else {
    return { valid: true, int };
  }
}

console.log(toInt('15677543')) // { valid: true, int: 15677543 }



// this and calling context
function fooey() {
  console.log(this)
}

fooey() // logs out the global window/this

let bary = {
  fooey
}

bary.fooey() // { fooey: [Function: fooey] }

