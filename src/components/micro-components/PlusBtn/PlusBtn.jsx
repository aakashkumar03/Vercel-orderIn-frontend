import styles from './PlusBtn.module.css'
const PlusBtn = ({onClick}) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <img src='/images/plus.svg' />
        </button>
    )
}

export default PlusBtn