import { getTranslations } from 'next-intl/server'
import ClientFetch from './client-fetch'

export default async function Index({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('Index')

  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store'
  })
  const users = await res.json()

  return (
    <div>
      <h1 className='p-4 font-sans text-3xl font-bold'>{t('title')}</h1>

      <ul>
        {users.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      <ClientFetch />
    </div>
  )
}
