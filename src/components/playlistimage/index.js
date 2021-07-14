import './index.css';

const PlaylistImage = (props) => {
    return (
        <div className="playlist-image">
            <img className="album-image" src={props.url} alt={props.alt}></img>
        </div>
    )
}

export default PlaylistImage;