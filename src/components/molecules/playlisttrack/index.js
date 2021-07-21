import data from '../../../assets/singlesample/index';

import EmbedSpotify from '../../atoms/embedspotify/index';
import Title from '../../atoms/title';
import Artist from '../../atoms/artist';
import Album from '../../atoms/album';
import Button from '../../atoms/button';
import './index.css';

const PlaylistTrack = (props) => {
    return (
        <div className="playlist-title">
            {/* <EmbedSpotify url="https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb?theme=0" title="Bohemian Rhapsody"/> */}
            <div className="playlist">
                <Title title={props.title}/>
                <Artist artist={props.artist}/>
                <Album album={props.album}/>
            </div>
                <Button url={props.url} name='Select'/>
        </div>
    )
}

export default PlaylistTrack;