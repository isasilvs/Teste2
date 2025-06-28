import styles from "./card.module.css"

export default function Titulo(props){
    return(
        <>
        <h3 className={styles.prop}>
            {props.titulo}
        </h3>
        </>
    )
}