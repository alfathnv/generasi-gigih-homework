const EmbedSpotify = (props) => {
    return (
        <div>
            <iframe src={props.url} title={props.title}  width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

export default EmbedSpotify;