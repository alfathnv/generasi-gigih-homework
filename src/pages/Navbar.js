import { Link } from 'react-router-dom'
import styles from './pages.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav_container}>
            <ul className={styles.section}>
                <Link to="/" className={styles.item}>
                    Home
                </Link>
                <Link to="/createplaylist" className={styles.item}>
                    Create Playlist
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
