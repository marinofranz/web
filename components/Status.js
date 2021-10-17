import { useLanyard } from "react-use-lanyard";
import styles from "../styles/status.module.css";
import classnames from "classnames";

export default function Status(){
    const { loading, status } = useLanyard({
        userId: "598953747963707409",
        socket: true
    });

    return(
        <>
        {loading === false ? (
            <p>{status.discord_status !== "offline" ? "Online" : "Offline"} <span className={classnames(styles.dot, status.discord_status !== "offline" ? styles.online : styles.offline)}></span></p>
        ): (
            <p></p>
        )}
        </>
    );
}