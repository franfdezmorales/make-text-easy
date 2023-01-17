import styles from './styles.module.css'
import type { ReactNode } from 'react'
import Footer from '@components/Footer'


type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {

    return (
        <div className={styles.layout}>
            <div className={styles.children}>
                {children}
            </div>
            <Footer />
        </div>
    )
}


export default Layout