import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { login, logout } from "../action/loginAction";
import {Outlet, useNavigate} from 'react-router-dom';

function Registro(props) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        Axios.post("http://localhost:3000/user/register", {
            name,
            email,
            password
        }).then(res => {
            console.log(res.data);

            props.login();

            if(props.login){
                navigate("/aulas", { replace: true });
            }
        }).catch(error => {
            navigate("/user/registro/error", { replace: true });
        }
        );
    };

  return (
    <div className="container-login">
      <label>Digite o nome</label>
      <input type="name" onChange={(event)=>setName(event.target.value)} placeholder="digite o nome" required />
      <label>Digite o email</label>
      <input type="email" onChange={(event)=>setEmail(event.target.value)} placeholder="digite o email" required />
      <label>Digite a senha</label>
      <input type="password" onChange={(event)=>setPassword(event.target.value)} placeholder="digite a senha" required />
      <button onClick={handleRegisterClick} type="submit">Registrar</button>
      <Outlet />
    </div>
  );
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

export default connect(mapStateToProps, mapDispathToProps)(Registro);