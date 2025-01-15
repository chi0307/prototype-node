import typia from 'typia'

export interface Item {
  name: string
  order?: number
  list: string[] | null
}

export const isItem = typia.createIs<Item>()
