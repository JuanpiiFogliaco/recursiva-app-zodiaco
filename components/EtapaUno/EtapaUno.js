import style from "./EtapaUno.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {parseNumToGenero} from '../../utils/index';

export default function EtapaUno({ btnHome }) {
  const [genero, setGenero] = useState([]);
  const [stepOne, setStepOne] = useState([]);
  const [avisoEstado, setAvisoEstado] = useState([]);
  const route = useRouter();

  useEffect(() => {
    setGenero(0);
    setAvisoEstado(false);
    setStepOne(atob(btnHome));
  }, [stepOne]);

  const handleClick = (e) => {
    const estadoGenero = e.target.name;
    switch (estadoGenero) {
      case "1":
        setGenero((estadoGenero));
        break;
      case "2":
        setGenero((estadoGenero));
        break;
      case "3":
        setGenero((estadoGenero));
        break;
      default:
        alert("default");
    }
  };

  const verEstadoGenero = () => {
    if (genero === 0) {
      setAvisoEstado(true);
    } else {
      route.push("/datos/" + btoa(genero) + `?estado=` + btnHome);
    }
  };

  return (
    <div className={style.contenedorEtapaUno}>
      {stepOne ? (
        <div className={style.etapaUno}>
          <div className={style.contenedorImagen}>
            <img src="/material/step1.png" className={style.etapaUnoImg} />
          </div>
          <h1 className={style.titulo}>Ingresa tu genero</h1>
          <div className={style.generos}>
            <img
              onClick={handleClick}
              name="1"
              className={style.imgGenero}
              src="/material/gen-1.png"
            />
            <img
              onClick={handleClick}
              name="2"
              className={style.imgGenero}
              src="/material/gen-2.png"
            />
            <img
              onClick={handleClick}
              name="3"
              className={style.imgGenero}
              src="/material/gen-3.png"
            />
          </div>
          <div className={style.notificacionGenero}>
            {genero > 0 ? "Genero Seleccionado: " + parseNumToGenero(genero) : ""}
          </div>
          <div className={style.notificacion}>
            {avisoEstado && genero === 0
              ? "ups, antes debe seleccionar un genero!"
              : ""}
          </div>
          <div className={style.contenedorBtnDatos}>
            <div className={style.btnDatos} onClick={verEstadoGenero}>
              INGRESAR
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
