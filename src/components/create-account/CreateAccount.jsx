import React, { useState } from 'react'
import logoGogle from '../../images/logo-google.svg'
import '../create-account/createAccount.scss'
import Input from '../input/Input';

//  Como todo o layout está em ingles achei melhor usar a mensagem de erro em inglês tambem

function CreateAccount(props) {

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

  const [currentName, setCurrentName] = useState({
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

  const changeName = (e)=> {
    setCurrentName({
      ...currentName,
      value: e.currentTarget.value,
      error: false,
      errMsg: ''
    })
  }

  const submit = () => {
    const loginValue = currentLogin.value;
    const passwordValue = currentPassword.value;
    const nameValue = currentName.value;

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
      setCurrentName({
        ...currentName,
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
      setCurrentName({
        ...currentName,
        error: true,
        errMsg: 'This field cannot be empty'
      })

      return;
    }

    if (!nameValue){
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
      setCurrentName({
        ...currentName,
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

    if (!/\w{6,}/.test(passwordValue)) {
      setCurrentPassword({
        error: true,
        errMsg: 'Password cannot be less than 6 characters'
      })
    }
  }

  return (
    <>
      <div className="container-login">
        <span className="span-login">Invision</span>
        <h1>Getting Started</h1>
        <div className="box-inputs">
          <form className="form-inputs">
            <Input errMsg={currentName.errMsg} error={currentName.error} onChange={changeName} label="Full Name" type="text" name="name"/>
            <Input errMsg={currentLogin.errMsg} error={currentLogin.error} onChange={changeValue} label="Users name or Email" type="text" name="name"/>
            <Input errMsg={currentPassword.errMsg} error={currentPassword.error} onChange={changePassword} label="Password" type="password" name="password"/>
          </form>
        </div>
        <div>
          <button onClick={submit} className="button-sing">Sign up</button>
        </div>
        <div className="container-or">
          <div className="line-or"></div>
          <span> Or</span>
          <div className="line-or"></div>
        </div>
        <div>
          <button className="sing-google">
            <img src={logoGogle} alt="logo google"></img>
            Sign up with Google
          </button>
        </div>
        <p className="span-terms">
            By signing up, you agree to Invision
            <a className="a-terms" href="https://www.w3schools.com"> Terms of Conditions</a> and <a className="a-terms" href="https://www.w3schools.com">Privacy Policy</a>
        </p>
        <button className="login-invision" onClick={props.onClick}>Already on Invision? Log in</button>
      </div>
    </>
  )
}

export default CreateAccount;