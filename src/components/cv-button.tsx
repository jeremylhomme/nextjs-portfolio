import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { Button } from '@/src/components/ui/button'

export default function CVButton() {
  const locale = useLocale()
  const t = useTranslations()
  const cvUrl =
    locale === 'fr' ? '/cv-jeremy-lhomme-fr.pdf' : '/cv-jeremy-lhomme-en.pdf'

  return (
    <a href={cvUrl} download>
      <Button variant='custom' size='custom' className='mt-2 w-fit md:mr-8'>
        {t('cv_button')}
      </Button>
    </a>
  )
}
