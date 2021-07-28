import { useState, useEffect } from 'react'

const Select = () => {
    const [select, setSelect] = useState([])

    useEffect(() => {
        console.log(select)
    }, [select])

    const isSelected = (id) => {
        return select.includes(id)
    }

    const handleSelect = (id) => {
        if (!isSelected(id)) {
            addSelect(id)
        } else {
            removeSelect(id)
        }
    }

    const addSelect = (id) => {
        setSelect((prevState) => [...prevState, id])
    }

    const removeSelect = (id) => {
        setSelect(select.filter((item) => item !== id))
    }

    return { isSelected, handleSelect }
}

export { Select }
