import './Login.css'
import { auth } from '../components/auth'
import { Select } from '../components/select'
import { getAccessToken } from '../components/access'
import { useEffect } from 'react'

const Login = () => {
    const { token, setToken } = Select()

    useEffect(() => {
        if (
            window.location.href.includes('http://localhost:3000/#access_token')
        ) {
            setToken(getAccessToken())
            console.log('aw')
        }
    }, [])
    console.log(token)

    return (
        <div className="login-container">
            <a href={auth()} className="login-button">
                Login
            </a>
        </div>
    )
}

export default Login
