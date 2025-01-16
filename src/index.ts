import { message } from '@/example'

import { getUsers } from './apis/example'

console.log(message)

void getUsers().then((result) => {
  console.log(result)
})
