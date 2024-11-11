'use client'

import useSWR from 'swr'
import { Users } from './types'

const fetcher = async (url: string): Promise<Users> => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch')
  const data = res.json()
  return data
}

function ClientFetch() {
  const { data, error } = useSWR<Users>('/api/users', fetcher)

  return (
    <div>
      <h1>Client Fetch</h1>
      <ul>
        {data?.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientFetch
