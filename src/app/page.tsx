import { getTranslations } from 'next-intl/server'
import ClientFetch from './client-fetch'

export default async function Index({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('Index')

  const res = await fetch('http://localhost:3001/api/users', {
    cache: 'no-store'
  })
  const users = await res.json()

  return (
    <section className='relative overflow-clip bg-gradient-to-t from-blue-100/30 px-4 py-12 dark:from-blue-900/5 sm:px-6 md:mx-auto md:max-w-[1248px]'>
      <section className='p-4 text-3xl font-bold'>{t('title')}</section>
      <ul>
        {users?.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      <ClientFetch />
    </section>
  )
}
