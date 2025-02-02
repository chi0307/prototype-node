import { createApiClient } from '@chi0307/axios-wrapper'
import typia from 'typia'

const apiClient = createApiClient('https://5a019f7b-11a8-43f8-8dad-fc6d4303ee3d.mock.pstmn.io')

interface User {
  id: number
  name: string
}
export const getUsers = apiClient.get('/users', typia.createIs<User[]>())
export const getUser = apiClient.get<{ userId: string }, never, User>(
  '/user/:userId',
  typia.createIs<User>(),
)
