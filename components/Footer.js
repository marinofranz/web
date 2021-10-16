import styles from "../styles/footer.module.css"
import Status from "./Status";

export default function Footer(){
    return (
        <div className={styles.footer}>
            <Status/>
        </div>
    );
}