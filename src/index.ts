import 'dotenv/config'

import { AxiosError } from 'axios'

import { getUsers } from '@/apis/example'
import { message } from '@/example'

console.log('NODE_ENV', process.env['NODE_ENV'])
console.log(message)

void getUsers()
  .then((result) => {
    console.log(result.data)
  })
  .catch((err: unknown) => {
    console.error('err', err)
    console.log('is AxiosError', err instanceof AxiosError)
  })
