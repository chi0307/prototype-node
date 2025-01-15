import { isItem } from '@/example'

console.log(isItem({ name: 'abc', list: null }), 'is true')
console.log(isItem({ name: 'abc', list: ['a', 'b'] }), 'is true')
console.log(isItem({ name: 'abc', list: ['a', 'b', 1, 2] }), 'is false')
console.log(isItem({ name: 'abc', order: 1, list: null }), 'is true')
console.log(isItem({ name: 'abc', order: '1', list: null }), 'is false')
