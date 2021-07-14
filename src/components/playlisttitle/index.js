import EmbedSpotify from '../embedspotify/index';
import './index.css';

const PlaylistTitle = (props) => {
    return (
        <div className="playlist-title">
            <EmbedSpotify url="https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb?theme=0" title="Bohemian Rhapsody"/>
            <div className="playlist">
                <h1 className="title">{props.title}</h1>
                    <p className="artists">{props.artists}</p>
                    <h2 className="album">{props.album}</h2>   
                </div>
            <a href={props.url} className="select-button">Select<span className="fa fa-play-circle"></span></a>
        </div>
    )
}

export default PlaylistTitle;