import React from 'react'
import Link from '../Link'
import { buildAuthLink } from '../../assets/auth'

const Login = () => {
    return <Link url={buildAuthLink()} name="Login"></Link>
}

export default Login
