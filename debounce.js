const debounce = (func, delay = 1000) => {}

let a = 0
const fn = () => {
  a += 1
}

const newFn = debounce(fn)
newFn()
newFn()
newFn()

console.log(a === 0)
setTimeout(() => {
  console.log(a === 1)
}, 1500)
