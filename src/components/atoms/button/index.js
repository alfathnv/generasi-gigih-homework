import './index.css'

const Button = (props) => {
    return <a href={props.url} className="select-button">{props.name}<span className="fa fa-play-circle"></span></a>; 
}

export default Button;
