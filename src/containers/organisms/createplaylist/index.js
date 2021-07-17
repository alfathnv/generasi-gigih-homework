import React,{Component} from 'react';
import PlaylistImage from '../../../components/molecules/playlistimage/index';
import PlaylistTrack from '../../../components/molecules/playlisttrack';

import './index.css';

const CreatePlaylist = (props) => {
    return (
        <div className="container">
            <PlaylistImage url={props.url} alt={props.url}/>
            <PlaylistTrack title={props.title} artist={props.artist} album={props.album}/>
        </div>
    )
}

export default CreatePlaylist;