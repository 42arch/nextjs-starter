import { useTranslations } from 'next-intl'

export default function Index({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = useTranslations('Index')

  console.log(112, locale)

  return <h1 className='p-4 text-3xl font-bold'>{t('title')}</h1>
}
