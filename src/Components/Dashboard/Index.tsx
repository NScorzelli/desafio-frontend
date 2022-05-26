import profileImage from '../../assets/profile.png';
import styles from './Dashboard.module.css';
import graficImage from '../../assets/grafico1.png';

export const Dashboard = () => {
    return(
    <>
        <header>
            <div className={styles.iconLeft}>
                <label className={styles.nomeEmpresa}>Empresa ABC</label>
            </div>
            <div className={styles.iconRight}>
                <label className={styles.nomeUsuario}>Nícolas Nascimento</label>
                <img className={styles.profileImage} src={profileImage} alt='' width={50}/>
            </div>
        </header>
        <body>
            <div className={styles.container}>
                <div className={styles.dashMenu}>
                    <div className={styles.dashNome}>
                        Dashboard
                    </div> 
                    <ul className={styles.menuCarossel}>
                        <li>Folha de Pagamento <label className={styles.dashMoney}>R$269.269,12</label></li>
                        <li>Imposto <label className={styles.dashMoney}>R$9.000,00</label></li>
                        <li>Comissão <label className={styles.dashMoney}>R$269,36</label></li>
                        <li>Faturamento Bruto <label className={styles.dashMoney}>1.269,12</label></li>
                        <li>Faturamento Líquido <label className={styles.dashMoney}>1.000.000,00</label></li>
                    </ul>
                </div>
                <div className={styles.receita}>
                <label className={styles.lbReceita}>Receita</label>
                    <div className={styles.gridFather}>
                            <div className={styles.grid}>
                            <img src={graficImage} alt="" width={650}/>
                    </div>
                            <div className={styles.grid}>
                            <img src={graficImage} alt="" width={650}/>
                        </div>

                    </div>
                </div>

                <div className={styles.despesa}>
                <label className={styles.lbDespesa}>Despesa</label>
                    <div className={styles.gridFather}>
                            <div className={styles.grid}>
                            <img src={graficImage} alt="" width={650}/>
                    </div>
                            <div className={styles.grid}>
                            <img src={graficImage} alt="" width={650}/>
                        </div>

                    </div>
                </div>

                
            </div>
        </body>
        <footer>
           <div className={styles.foot}> © 2020 Empresa ABC - Todos os direitos reservados</div>
        </footer>
    </>
);
}