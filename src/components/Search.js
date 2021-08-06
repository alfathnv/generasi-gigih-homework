import { Input } from '@chakra-ui/react'
import styles from './playlist.module.css'

const Search = ({ handle }) => {
  return (
    <div className={styles.search_container}>
      <form onSubmit={handle}>
        <Input
          name="query"
          variant="flushed"
          placeholder="Search..."
          size="lg"
          focusBorderColor="#ff7597"
          color="white"
        />
      </form>
    </div>
  )
}

export default Search
