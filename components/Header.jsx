import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img width="20px" src="/icons/lines.svg" />
      <img width="150px" src="/icons/logo_99minutos.svg" />
      <h3>Header</h3>
      <div className={styles.userInfo}>
        <div>
          <p>
            Hola, <span>Eduardo Carrada Leon</span>
          </p>
          <p>Estar trajando en MX2</p>
        </div>
        <div className={styles.userAvatar}>EC</div>
      </div>
    </div>
  );
};

export default Header;
