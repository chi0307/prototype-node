import { GraphQLClient } from 'graphql-request'

import { ExampleDocument } from '@/generated/graphql-example/generated'

const client = new GraphQLClient('https://graphql.api.apollographql.com/api/graphql')

export async function queryExample(): Promise<string | null> {
  const response = await client.request(ExampleDocument)
  return response.me?.name ?? null
}
