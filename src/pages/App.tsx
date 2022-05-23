import React from 'react';
import logo from '../assets/icons/logo.svg';
import {ReactComponent as Logo} from '../assets/icons/logo.svg';
import s from '../styles/app.module.scss';

function App() {
  return (
    <div className={s.app}>
      <img src={logo} className={s.app__logo} alt="logo"/>
      <Logo className={s.svg}/>
    </div>
  );
}

export default App;
