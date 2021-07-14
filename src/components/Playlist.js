import React,{Component} from 'react';
import data from './single-sample';
import './Playlist.css';

export class Playlist extends Component{
    render(){
        return (
            <div className="container">
                <div className="playlist-image">
                    <img className="album-image" src={data.album.images[0].url} alt="bohemian-rhapsody"></img>
                </div>

                <div className="playlist-title">
                    <div>
                        <iframe src="https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb?theme=0" title="Bohemian Rhapsody"  width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    <div className="playlist">
                        <h1 className="title">{data.name}</h1>
                        <p className="artists">{data.artists[0].name}</p>
                        <h2 className="album">{data.album.name}</h2>   
                    </div>
                    <a href={data.external_urls.spotify}><button className="select-button">Select<span className="fa fa-play-circle"></span></button></a>
                    
                </div>
                {/*<div>
                <iframe src="https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb?theme=0" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>*/}
            </div>
            
        )
    }
}