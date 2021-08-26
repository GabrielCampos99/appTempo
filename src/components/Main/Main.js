import { useRef, useState, useCallback, useEffect } from "react";
import style from "./Main.module.scss";

import Form from "./Form";
import Wrapper from "../utilities/Wrapper";
import Content from "./Content";
import Footer from "../Footer/Footer";

const Main = (props) => {
  const [mostrarConteudo, setMostrarConteudo] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [inputCidade, setInputCidade] = useState("");
  const [temperaturaCidade, setTemperaturaCidade] = useState();
  const [dia, setDia] = useState();
  const [ventoCidade, setVentoCidade] = useState();
  let inputEl = useRef("");

  const onClickHandler = (e) => {
    e.preventDefault();

    let cidade = inputEl.current.value
      .toString()
      .toLowerCase()
      .replaceAll(" ", "-");

    setInputCidade(cidade);
    getTemp(cidade);
  };

  const getTemp = useCallback(async (cidade) => {
    setCarregando(true);
    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${cidade}`
    );

    const data = await response.json();
    setTemperaturaCidade(data.temperature);
    setVentoCidade(data.wind);

    setCarregando(false);
    setMostrarConteudo(true);
  });

  useEffect(() => {
    let hoje = new Date();
    let diaDaSemana = hoje.getUTCDay();
    console.log(diaDaSemana);

    switch (diaDaSemana) {
      case 0:
        setDia("Domingo");
        break;
      case 1:
        setDia("Segunda-Feira");
        break;

      case 2:
        setDia("Terça-Feira");
        break;

      case 3:
        setDia("Quarta-Feira");
        break;

      case 4:
        setDia("Quinta-Feira");
        break;

      case 5:
        setDia("Sexta-Feira");
        break;

      case 6:
        setDia("Sábado");
        break;

      default:
        setDia("Não é um dia valido");
        break;
    }
  }, []);

  let conteudo = <h3 className={style.textCentered}>Insira uma cidade</h3>;
  if (mostrarConteudo) {
    conteudo = (
      <Content
        temperatura={temperaturaCidade}
        vento={ventoCidade}
        cidade={inputCidade}
        dia={dia}
      />
    );
  }
  if (carregando) {
    conteudo = <h3 className={style.textCentered}>Carregando...</h3>;
  }

  return (
    <Wrapper>
      <Form onClick={onClickHandler} ref={inputEl} />
      {conteudo}
    </Wrapper>
  );
};

export default Main;
