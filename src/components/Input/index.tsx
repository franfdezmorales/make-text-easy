import type { ChangeEvent } from 'react';
import styles from './styles.module.css'


type InputProps = {
    title: string; 
    value: string;
    placeholder?: string;
    setValue: (e: ChangeEvent<HTMLInputElement>) => void;
}


const Input = ({ title, value, placeholder, setValue }: InputProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>{title}</span>
            <input placeholder={placeholder} value={value} onChange={setValue} type='text' className={styles.input} />
        </div>
    )
}

export default Input