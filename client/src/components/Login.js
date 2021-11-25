import React from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import { login, logout } from '../action/loginAction';
import {connect} from 'react-redux';
import Axios from 'axios';

function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();


    const handleLoginClick = () => {
        Axios.post('http://localhost:3000/user/login', {
            email,
            password
        })
        .then(res => {
            console.log(res.data);

            props.login();

            if(props.login){
                navigate("/aulas", { replace: true });
            }
        })
        .catch(err => {
            navigate("/user/log/error", { replace: true });
        })
    }

    return (
        <div className="container-login">
            <label>Digite o email</label>
                <input onChange={(event)=>setEmail(event.target.value)} type="email" required placeholder="digite o email"/>
            <label>Digite a senha</label>
                <input onChange={(event)=>setPassword(event.target.value)} type="password" required placeholder="digite a senha"/>
            <button onClick={handleLoginClick} type="submit">Entrar</button>
                <small>Não tem login? <Link to="/user/registro">Registre-se</Link></small>

            <Outlet />
        </div>
    )
}


function mapStateToProps(state) {
    return {
        log: state
    }
}

function mapDispathToProps(dispatch) {
    return {
        login: ()=> dispatch(login()),
        logout: ()=> dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Login);