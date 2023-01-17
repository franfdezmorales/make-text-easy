import type { ChangeEvent } from 'react';
import styles from './styles.module.css'


type TextAreaProps = {
    title: string; 
    value: string;
    placeholder?: string;
    setValue?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    readOnly?: boolean;
}


const TextArea = ({ title, value, placeholder, setValue, readOnly }: TextAreaProps): JSX.Element => {


    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>{title}</span>
            <textarea placeholder={placeholder} readOnly={readOnly} value={value} onChange={setValue} className={styles.textArea} />
        </div>
    )
}

export default TextArea