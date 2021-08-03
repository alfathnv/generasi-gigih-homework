import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/playlistSlice'
import { useEffect } from 'react'
import { authLink, getAccessToken } from '../assets/auth'

const Login = () => {
    const { isAuth, token } = useSelector((state) => state.playlist)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isAuth && window.location.hash) {
            console.log('not auth')
            dispatch(login(getAccessToken()))
        }
    }, [dispatch, isAuth, token])

    return (
        <>
            <a href={authLink()}>Click</a>
        </>
    )
}

export default Login
