/**
 * 从 1 到 100
 * 如果是 3 的倍数 往数组中储存一个 'Fizz'
 * 如果是 5 的倍数 往数组中储存一个 'Buzz'
 * 如果是 既是3的倍数 又是5的倍数 往数组中储存一个 'FizzBuzz'
 * 其余情况 往数组中中储存一个 ’‘
 */
function fuzzBuzz() {}

const result = fuzzBuzz()

const expected = [
  '',
  '',
  'Fizz',
  '',
  'Buzz',
  'Fizz',
  '',
  '',
  'Fizz',
  'Buzz',
  '',
  'Fizz',
  '',
  '',
  'FizzBuzz',
  '',
  '',
  'Fizz',
  '',
  'Buzz',
  'Fizz',
  '',
  '',
  'Fizz',
  'Buzz',
  '',
  'Fizz',
  '',
  '',
  'FizzBuzz',
  '',
  '',
  'Fizz',
  '',
  'Buzz',
  'Fizz',
  '',
  '',
  'Fizz',
  'Buzz',
  '',
  'Fizz',
  '',
  '',
  'FizzBuzz',
  '',
  '',
  'Fizz',
  '',
  'Buzz',
  'Fizz',
  '',
  '',
  'Fizz',
  'Buzz',
  '',
  'Fizz',
  '',
  '',
  'FizzBuzz',
  '',
  '',
  'Fizz',
  '',
  'Buzz',
  'Fizz',
  '',
  '',
  'Fizz',
  'Buzz',
  '',
  'Fizz',
  '',
  '',
  'FizzBuzz',
  '',
  '',
  'Fizz',
  '',
  'Buzz',
  'Fizz',
  '',
  '',
  'Fizz',
  'Buzz',
  '',
  'Fizz',
  '',
  '',
  'FizzBuzz',
  '',
  '',
  'Fizz',
  '',
  'Buzz',
  'Fizz',
  '',
  '',
  'Fizz',
  'Buzz',
]

function test() {
  for (let i = 0; i < 100; i++) {
    if (result[i] !== expected[i]) {
      throw new Error('not match')
    }
  }
}
test()
