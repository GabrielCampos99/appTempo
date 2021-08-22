import style from "./Content.module.scss";

const Content = (props) => {
  return (
    <main className={style.conteudo}>
      <div className={style["conteudo-item"]}>
        <h4>
          <img
            src="https://img.icons8.com/ios/64/000000/calendar.png"
            alt="Dia semana"
          />
          Dia da semana:
        </h4>
        <h3>{props.dia}</h3>
      </div>

      <div className={style["conteudo-item"]}>
        <h4>
          <img
            src="https://img.icons8.com/glyph-neue/64/000000/wind.png"
            alt="Temperatura"
          />
          Temperatura:
        </h4>
        <h3>{props.temperatura}</h3>
      </div>

      <div className={style["conteudo-item"]}>
        <h4>
          <img
            src="https://img.icons8.com/wired/64/000000/city.png"
            alt="Cidade"
          />
          Cidade:
        </h4>
        <h3>{props.cidade}</h3>
      </div>

      <div className={style["conteudo-item"]}>
        <h4>
          <img
            src="https://img.icons8.com/glyph-neue/64/000000/wind.png"
            alt="Velocidade do vento"
          />
          Vento:
        </h4>
        <h3>{props.vento}</h3>
      </div>
    </main>
  );
};

export default Content;
