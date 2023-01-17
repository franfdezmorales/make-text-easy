import styles from './styles.module.css'
import type { ReactNode } from 'react'



type ButtonProps = {
    onClick: () => void;
    children: ReactNode
}

const Button = ({ onClick, children }: ButtonProps): JSX.Element => {

    return (
        <button onClick={onClick} className={styles.button}>{children}</button>
    )
}

export default Button