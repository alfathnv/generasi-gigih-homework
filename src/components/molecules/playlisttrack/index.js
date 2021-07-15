import data from '../../../assets/singlesample/index';

import EmbedSpotify from '../../atoms/embedspotify/index';
import Title from '../../atoms/title';
import Artist from '../../atoms/artist';
import Album from '../../atoms/album';
import Button from '../../atoms/button';
import './index.css';

const PlaylistTrack = () => {
    return (
        <div className="playlist-title">
            <EmbedSpotify url="https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb?theme=0" title="Bohemian Rhapsody"/>
            <div className="playlist">
                <Title title={data.name}/>
                <Artist artist={data.artists[0].name}/>
                <Album album={data.album.name}/>
            </div>
                <Button url={data.external_urls.spotify} name='Select'/>
        </div>
    )
}

export default PlaylistTrack;