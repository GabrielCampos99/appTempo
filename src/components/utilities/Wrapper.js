import style from "./Wrapper.module.scss";

const Wrapper = (props) => {
  return <div className={style.container}>{props.children}</div>;
};

export default Wrapper;
