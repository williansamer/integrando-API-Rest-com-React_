import React from 'react'
import { connect } from 'react-redux';
import { login, logout } from '../action/loginAction';
import {Link, useNavigate} from 'react-router-dom';

function AuthLogin(props) {
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.setItem('user', '');
        props.logout();

        if(props.logout){
            navigate("/", { replace: true });
        }
    }

    return (
        <div>
            {props.log ?
                <button onClick={handleLogout}>Logout</button> :
                <button type="submit"><Link to="/user/log">Login</Link></button>}
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

export default connect(mapStateToProps, mapDispathToProps)(AuthLogin);