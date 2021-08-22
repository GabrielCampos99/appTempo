import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.container}>
      <p>
        Desenvolvido por{" "}
        <a href="https://github.com/GabrielCampos99">Gabriel S. Campos</a>
      </p>
      <p>
        Utilizando a api{" "}
        <a href="https://github.com/robertoduessmann/weather-api">
          weather-api
        </a>
      </p>
    </footer>
  );
};

export default Footer;
