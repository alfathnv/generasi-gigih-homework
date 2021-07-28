import Login from './Login'
import Track from './Track'

const Playlist = () => {
    let page
    console.log(window.location.href)
    if (window.location.href === 'http://localhost:3000/') {
        page = <Login />
    } else {
        page = <Track />
    }
    return <div>{page}</div>
}

export default Playlist
