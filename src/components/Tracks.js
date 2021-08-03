import styles from './playlist.module.css'

const Tracks = (props) => {
    return (
        <div className={styles.item}>
            <img src={props.url} alt={props.name}></img>
            <h1>{props.name}</h1>
            <h2>{props.artist}</h2>
            <h2>{props.album}</h2>
            <button onClick={props.handle}>{props.select}</button>
        </div>
    )
}

export default Tracks
