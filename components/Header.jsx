import styles from "./Header.module.css";

const Header = () => {
  const user = "Eduardo Carrada Leon";

  return (
    <div className={styles.header}>
      <img className={styles.menuIcon} src="/icons/lines.svg" />
      <img width="150px" src="/icons/logo_99minutos.svg" />
      <h3>Header</h3>
      <div className={styles.userInfo}>
        <div>
          <p>
            Hola, <span>{user}</span>
          </p>
          <p>Estar trajando en MX2</p>
        </div>
        <div className={styles.userAvatar}>EC</div>
      </div>
    </div>
  );
};

export default Header;
