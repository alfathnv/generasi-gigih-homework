import { useState } from 'react'
import { createPlaylist } from '../assets/spotify'
import Modal from './Modal'
import { useSelector } from 'react-redux'
import './CreatePlaylist.css'

const CreatePlaylist = () => {
    const { token, tracks } = useSelector((state) => state.playlist)
    const [isOpen, setIsOpen] = useState(false)

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
        <div>
            <button onClick={() => setIsOpen(true)} className="create">
                Create
            </button>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onCreate={handleCreate}
            ></Modal>
        </div>
    )
}

export default CreatePlaylist
