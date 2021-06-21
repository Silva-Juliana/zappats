import React, { useState } from 'react'
import logoGogle from '../../images/logo-google.svg'
import '../login/login.scss'
import Input from '../input/Input';


//  Como todo o layout está em ingles achei melhor usar a mensagem de erro em inglês tambem
function Login(props) {

  const [currentLogin, setCurrentLogin] = useState({
    value: '',
    error: false,
    errMsg: ''
  });
  const [currentPassword, setCurrentPassword] = useState({
    value: '',
    error: false,
    errMsg: ''
  });

  const changeValue = (e)=> {
    setCurrentLogin({
      ...currentLogin,
      value: e.currentTarget.value,
      error: false,
      errMsg: ''
    })
  }

  const changePassword = (e)=> {
    setCurrentPassword({
      ...currentPassword,
      value: e.currentTarget.value,
      error: false,
      errMsg: ''
    });
  }

  const submit = () => {
    const loginValue = currentLogin.value;
    const passwordValue = currentPassword.value;

    if (!loginValue){
      setCurrentPassword({
        ...currentPassword,
        error: true,
        errMsg: 'This field cannot be empty'
      })
      setCurrentLogin({
        ...currentPassword,
        error: true,
        errMsg: 'This field cannot be empty'
      })

      return;
    }
    if (!passwordValue){
      setCurrentPassword({
        ...currentPassword,
        error: true,
        errMsg: 'This field cannot be empty'
      })
      setCurrentLogin({
        ...currentPassword,
        error: true,
        errMsg: 'This field cannot be empty'
      })

      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginValue)){
      setCurrentLogin({
        ...currentPassword,
        error: true,
        errMsg: 'The e-mail is wrong'
      })

      return ;
    }
  }
  
  return (
    <>
      <div className="container-login">
        <span className="span-login">Invision</span>
        <h1>Welcome to Invision</h1>
        <div className="box-inputs">
          <form className="form-inputs">
            <Input errMsg={currentLogin.errMsg} error={currentLogin.error} onChange={changeValue} label="Users name or Email" type="text" name="name"/>
            <Input errMsg={currentPassword.errMsg} error={currentPassword.error} onChange={changePassword} label="Password" type="password" name="password"/>
            <a className="forgot-password" href="https://www.w3schools.com">Forgot password?</a>
          </form>
        </div>
        <div>
          <button onClick={submit} className="button-sing">Sign in</button>
        </div>
        <div className="container-or">
          <div className="line-or"></div>
          <span> Or</span>
          <div className="line-or"></div>
        </div>
        <div>
          <button className="sing-google">
            <img src={logoGogle} alt="logo google"></img>
            Sign in with Google
          </button>
        </div>
        <button className="login-invision" onClick={props.onClick}>New Invision? Create Account</button>
      </div>
    </>
  )
}

export default Login;