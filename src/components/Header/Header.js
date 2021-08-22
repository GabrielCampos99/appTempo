import style from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={style["header-bg"]}>
        <div className={style.container}>
          <h1 className={style["header-logo"]}>ReactTempo</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
