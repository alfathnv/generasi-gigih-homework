const Items = (props) => {
    return (
        <div>
            <img src={props.url} alt={props.name}></img>
            <h1>{props.name}</h1>
            <h2>{props.artist}</h2>
            <h2>{props.album}</h2>
            <button onClick={props.handle}>{props.select}</button>
        </div>
    )
}

export default Items
