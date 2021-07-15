import React,{Component} from 'react';
import data from '../../../assets/singlesample/index';
import PlaylistImage from '../../../components/molecules/playlistimage/index';
import './index.css';
import PlaylistTrack from '../../../components/molecules/playlisttrack';

export class Playlist extends Component{
    render(){
        return (
            <div className="container">
                <PlaylistImage url={data.album.images[0].url} alt="bohemian-rhapsody"></PlaylistImage>
                <PlaylistTrack title={data.name} artists={data.artists[0].name} album={data.album.name} url={data.external_urls.spotify}/>
            </div>
        )
    }
}