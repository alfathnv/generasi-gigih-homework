import Input from './Input'
import styles from './playlist.module.css'

const Search = ({ handle }) => {
    return (
        <div className={styles.search_container}>
            <form onSubmit={handle}>
                <Input type="text" name="query" place="Search..." />
            </form>
        </div>
    )
}

export default Search
