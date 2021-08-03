import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/playlistSlice'
import { useEffect } from 'react'
import { authLink, getAccessToken } from '../assets/auth'
import styles from './pages.module.css'

const Login = () => {
    const { isAuth, token } = useSelector((state) => state.playlist)
    const dispatch = useDispatch()
    let loginMessage

    if (!isAuth) {
        loginMessage = (
            <a href={authLink()} className={styles.login_button}>
                Login
            </a>
        )
    } else {
        loginMessage = <div style={{ fontSize: '30px' }}>Already Login...</div>
    }

    useEffect(() => {
        if (!isAuth && window.location.hash) {
            console.log('not auth')
            dispatch(login(getAccessToken()))
        }
    }, [dispatch, isAuth, token])

    return <div className={styles.login_container}>{loginMessage}</div>
}

export default Login
