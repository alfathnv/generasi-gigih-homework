import { useState } from 'react'
import { createPlaylist } from '../assets/spotify'
import Modal from './Modal'
import { useSelector } from 'react-redux'

const CreatePlaylist = () => {
    const { token, tracks } = useSelector((state) => state.playlist)
    const [isOpen, setIsOpen] = useState(false)
    const BUTTON_WRAPPER_STYLES = {
        position: 'relative',
        zIndex: 1,
    }
    const handleCreate = (e) => {
        e.preventDefault()
        const request = {
            name: e.target.title.value,
            description: e.target.desc.value,
            public: false,
        }
        if (request.name !== '' && request.desc !== '') {
            createPlaylist(token, tracks, request)
            setIsOpen(false)
        } else {
            alert('Masukan Title dan Deskripsi')
        }
    }
    return (
        <div style={BUTTON_WRAPPER_STYLES}>
            <button onClick={() => setIsOpen(true)}>Create Playlist</button>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onCreate={handleCreate}
            ></Modal>
        </div>
    )
}

export default CreatePlaylist
