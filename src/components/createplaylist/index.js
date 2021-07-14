import React,{Component} from 'react';
import data from '../singlesample/index';
import PlaylistImage from '../playlistimage/index';
import './index.css';
import PlaylistTitle from '../playlisttitle';

export class Playlist extends Component{
    render(){
        return (
            <div className="container">
                <PlaylistImage url={data.album.images[0].url} alt="bohemian-rhapsody"></PlaylistImage>
                <PlaylistTitle title={data.name} artists={data.artists[0].name} album={data.album.name} url={data.external_urls.spotify}/>
            </div>
        )
    }
}