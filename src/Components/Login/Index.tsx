import styles from './Login.module.css';
import backgroundImage from '../../assets/background.png';
import { useState } from 'react';
import { validarUsuario } from '../../helpers/validarUsuario';
import { Dashboard } from '../Dashboard/Index';

export const Login = () => {
    const [campo, setCampo] = useState('');
    const [senha, setSenha] = useState('');
    const [user, setUser] = useState(false);
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)

    const handleClick = (campo: string, senha: string) => {
    const validacao = validarUsuario(campo, senha);
    
      if(validacao)
      {
        return <Dashboard/> ? <p></p> : null 
      }
      else return alert('Credenciais incorretas!');  
    }
    
    return(
    <>
      <div className={styles.container}>
      <div className={styles.leftSide}>
        <img className={styles.bgImage} src={backgroundImage}/>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.menuLogin}>
          <label className={styles.title}>Login</label>
          <label>Email</label>
          <input type="email" 
           value={campo !== '' ? campo : ''}
           onChange={e => setCampo(e.target.value)} ></input>
          <label>Senha</label>
          <input type="password" 
          value={senha !==  '' ? senha : ''}
          onChange={e => setSenha(e.target.value)}
          ></input>
          <button onClick={() => {handleClick(campo, senha)} } >Entrar</button>
          <a className={styles.link} href=''>Esqueci minha senha!</a>
        </div>
      </div>
    </div>
  </>);
}




