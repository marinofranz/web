import loadingMessages from "../utils/loading";

export default function Loading(){
    return(
        <p>{loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}</p>
    )
}