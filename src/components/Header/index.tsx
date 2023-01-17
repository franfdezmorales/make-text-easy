import styles from './styles.module.css'
import { useTranslations } from 'next-intl'

const Header = (): JSX.Element => {

    const t = useTranslations()

    return (
        <div className={styles.layout}>
            <h1 className={styles.title}>Make Text Easy</h1>
            <span className={styles.description}>{t('description')}</span>
        </div>
    )
}


export default Header