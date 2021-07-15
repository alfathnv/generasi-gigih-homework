import React,{Component} from 'react';
import data from '../../../assets/singlesample/index';
import PlaylistImage from '../../../components/molecules/playlistimage/index';
import PlaylistTrack from '../../../components/molecules/playlisttrack';

import './index.css';

export class CreatePlaylist extends Component{
    render(){
        return (
            <div className="container">
                <PlaylistImage url={data.album.images[0].url} alt="bohemian-rhapsody"></PlaylistImage>
                <PlaylistTrack />
            </div>
        )
    }
}