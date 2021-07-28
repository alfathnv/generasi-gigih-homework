import { auth } from './auth'
import './Login.css'

const Login = () => {
    return (
        <div className="login-container">
            <a href={auth()} className="login-button">
                Login
            </a>
        </div>
    )
}

export default Login
