import { div } from 'prelude-ls';
import React,{Component} from 'react';
import Data from '../../../assets/all-sample/index';
import CreatePlaylist from '../../organisms/createplaylist';
import './index.css'


export class RowPlaylist extends Component{
    render(){
        return (
            <div className='row-playlist'>
                {Data.map((data,i) =>{
                return(
                    <div key={i}>
                        <CreatePlaylist 
                        url={data.album.images[0].url}
                        alt={data.name}
                        title={data.name}
                        artist={data.artists[0].name}
                        album={data.album.name}
                        />
                    </div>
                )
                    
                })}
            </div>
        )
    }
}

export default RowPlaylist;