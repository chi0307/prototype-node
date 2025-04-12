import 'dotenv/config'

import { getUsers } from '@/apis/example'
import { message } from '@/example'

console.log('NODE_ENV', process.env['NODE_ENV'])
console.log(message)

void getUsers().then((result) => {
  console.log(result.data)
})
