import ReactDom from 'react-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    color: 'black',
    padding: '50px',
    zIndex: 1000,
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000,
}

const Modal = ({ open, onCreate, onClose }) => {
    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div style={MODAL_STYLES}>
                <form onSubmit={onCreate}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title..."
                        minLength="10"
                    ></input>
                    <textarea name="desc" rows="4" minLength="20"></textarea>
                    <button>Submit</button>
                </form>

                <button onClick={onClose}>Close</button>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal
