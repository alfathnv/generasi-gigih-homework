import { useState } from 'react'
import sample from '../assets/all-sample'

const Select = () => {
    const [datas, setDatas] = useState(sample)
    const [select, setSelect] = useState([])
    const [token, setToken] = useState(() => '')

    const isSelected = (id) => {
        console.log(token)
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

    return {
        datas,
        setDatas,
        select,
        token,
        setToken,
        isSelected,
        handleSelect,
    }
}

export { Select }
