import Image from '../../atoms/image/index';
import './index.css';

const PlaylistImage = (props) => {
    return (
        <div className="playlist-image">
            <Image url={props.url} alt={props.alt}/>
        </div>
    )
}

export default PlaylistImage;