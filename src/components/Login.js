import "./Login.css";

const Login = (props) => {
    return (
        <div className="login-container">
            <a href={props.url} className="login-button">
                {props.name}
            </a>
        </div>
    );
};

export default Login;
