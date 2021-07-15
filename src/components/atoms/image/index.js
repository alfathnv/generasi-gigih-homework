import './index.css';

const Image = (props) => {
    return <img className="album-image" src={props.url} alt={props.alt}></img>;
}

export default Image;