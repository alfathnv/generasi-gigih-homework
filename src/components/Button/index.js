import React from 'react'

const index = ({ variant, handle, name }) => {
    return (
        <div>
            <button style={variant} onClick={handle}>
                {name}
            </button>
        </div>
    )
}

export default index
