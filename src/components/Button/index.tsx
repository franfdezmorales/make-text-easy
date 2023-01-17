import styles from './styles.module.css'
import type { ReactNode } from 'react'



type ButtonProps = {
    onClick: () => void;
    children: ReactNode
    disabled?: boolean;
}

const Button = ({ onClick, children, disabled }: ButtonProps): JSX.Element => {

    return (
        <button disabled={disabled} onClick={onClick} className={styles.button}>{children}</button>
    )
}

export default Button