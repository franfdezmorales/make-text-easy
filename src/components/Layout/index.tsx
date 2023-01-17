import styles from './styles.module.css'
import type { ReactNode } from 'react'



type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {

    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}


export default Layout