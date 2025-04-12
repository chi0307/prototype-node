import { createApiClient } from '@chi0307/axios-wrapper'
import typia from 'typia'

const apiClient = createApiClient('https://46f37615-e250-4ecd-938c-d6efb6d0b459.mock.pstmn.io')

interface User {
  id: number
  name: string
}
export const getUsers = apiClient.get('/users', typia.createIs<User[]>())
export const getUser = apiClient.get<{ userId: string }, never, User>(
  '/user/:userId',
  typia.createIs<User>(),
)
