import styles from './styles.module.css'
import { useTranslations } from 'next-intl'


const Footer = () => {

    const t = useTranslations()


    return (
        <div className={styles.layout}>
            <section className={styles.powered}>
                {`${t('poweredBy')} `}
                <a className={styles.link} href='https://openai.com' target='_blank' rel='noreferrer'>OpenAI{` `}</a>
                {`${t('and')} `}
                <a className={styles.link} href='https://vercel.com' target='_blank' rel='noreferrer'>Vercel Edge Functions.</a>
            </section>
            <section className={styles.user}>
                {`${t('madeWith')} `}
                <a className={styles.link} href='https://twitter.com/franfdezmorales' target='_blank' rel='noreferrer'>@franfdezmorales</a>
            </section>
        </div>
    )
}

export default Footer