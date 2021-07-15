import data from '../../../assets/singlesample/index';

import Image from '../../atoms/image/index'
import './index.css';

const PlaylistImage = () => {
    return (
        <div className="playlist-image">
            <Image url={data.album.images[0].url} alt="bohemian-rhapsody"/>
        </div>
    )
}

export default PlaylistImage;