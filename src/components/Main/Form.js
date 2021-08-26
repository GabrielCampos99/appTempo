import React, { useState } from "react";

import style from "./Form.module.scss";

const Form = React.forwardRef((props, ref) => {
  const svgPX = window.innerWidth;

  return (
    <div className={style.container}>
      {svgPX > 900 ? (
        <div className={style["custom-shape-divider-bottom-1629638951"]}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={style["shape-fill"]}
            ></path>
          </svg>
        </div>
      ) : (
        ""
      )}

      <form onSubmit={props.onClick}>
        <label>
          <h4>Cidade:</h4>
        </label>
        <input ref={ref} type="text" placeholder="Procurar por cidade" />
        <button>Buscar</button>
      </form>
    </div>
  );
});

export default Form;
