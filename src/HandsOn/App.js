import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Gif from './Gif'

function App() {
    const [datas, setDatas] = useState([])
    const [query, setQuery] = useState(() => '')

    useEffect(() => {
        let url = `${process.env.REACT_APP_GIPHY_GIF_URL}?`
        url += `&api_key=${process.env.REACT_APP_GIPHY_API}`
        url += `&q=${query}`
        url += `&limit=5`
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setDatas(json.data)
            })
        console.log(url)
    }, [query])

    const handlingSubmit = (e) => {
        e.preventDefault()
        setQuery(e.target.query.value)
    }

    return (
        <div>
            <SearchBar handle={handlingSubmit} />
            {datas.map((data) => (
                <Gif
                    key={data.id}
                    url={data.images.preview_webp.url}
                    title={data.title}
                ></Gif>
            ))}
        </div>
    )
}

export default App
