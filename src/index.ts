import 'dotenv/config'

import { getUsers } from '@/apis/example'
import { message } from '@/example'
import { queryExample } from '@/graphqlQuery'

console.log('NODE_ENV', process.env['NODE_ENV'])
console.log(message)

void getUsers().then((result) => {
  console.log(result.data)
})

void queryExample().then((result) => {
  console.log('graphql response me name is', result)
})
