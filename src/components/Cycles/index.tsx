import styles from "./styles.module.css"

export function Cycles() {
    return(
        <div className={styles.cycles}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>
                <span className={`${styles.cycledot} ${styles.workTime}`}></span>
            </div>
        </div>
    );
}