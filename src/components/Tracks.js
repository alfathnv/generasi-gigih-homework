import styles from '../pages/pages.module.css'

const Tracks = (props) => {
    return (
        <button className={styles.track_button} onClick={props.handle}>
            <div className={props.select}>
                <img
                    className={styles.track_image}
                    src={props.url}
                    alt={props.name}
                ></img>
                <div className={styles.middle}>
                    <h1 className={styles.track_title}>{props.name}</h1>
                    <h2 className={styles.track_artist}>{props.artist}</h2>
                    <h2 className={styles.track_album}>{props.album}</h2>
                </div>
            </div>
        </button>
    )
}

export default Tracks
