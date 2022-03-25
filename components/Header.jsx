import styles from "./Header.module.css"

const Header = () => {
    return(
        <div className={styles.header}>
            <img className={styles.img} width="20px" src="\icons\lines.svg" />
            <img className={styles.img} width="150px" src="\icons\logo_99minutos.svg" />
            <h3 className={styles.sep}>Warehouse</h3>
            <div className={styles.letra}>
                <p>HOLA, <span className={styles.nombre}>JESSICA LIZBETH AMARAL CASTILLON</span></p>
                <p>Estás trabajando en: <span className={styles.ciudad}>GDL1</span></p>
            </div>
            <div className={styles.circulo}>JC</div> 
        </div>
    );
};

export default Header