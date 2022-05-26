import styles from './App.module.css';
import { Dashboard } from './Components/Dashboard/Index';
import { Login } from './Components/Login/Index';
import { user } from './helpers/validarUsuario';
import { useState } from 'react';



export const App = () => {

  return (
    <>
      <Login/>
    </>
);}

export default App;




