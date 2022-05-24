import React from 'react';
import logo, { ReactComponent as Logo } from '../assets/icons/logo.svg';
import s from '../styles/app.module.scss';

const App = () => (
  <div className={s.app}>
    <img src={logo} className={s.app__logo} alt="logo" />
    <Logo className={s.svg} />
  </div>
);

export default App;
