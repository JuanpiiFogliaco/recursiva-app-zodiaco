import style from "./EtapaDos.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAll } from "../../services/";
import "../../utils/index";
import {
  formatMes,
  fechaUsuarioParseDate,
  obtenerSignoUsuario,
} from "../../utils/";
import { useRouter } from "next/router";

const EtapaDos = ({ btnEstado }) => {
  const route = useRouter();
  const [datos, setDatos] = useState({});
  const [signos, setSignos] = useState([]);
  useEffect(() => {
    try {
      setDatos({ nombre: "", email: "", fechaNacimiento: "" });
      getAll().then(({ horoscopo }) => {
        const horoscoposKeys = Object.keys(horoscopo);
        const horoscoposList = horoscoposKeys.map((key) => {
          return {
            ...horoscopo[key],
          };
        });
        setSignos(horoscoposList);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleContinuar = () => {
    const fechas = signos.map((signo) => {
      let aux = signo.fechaSigno.split(" al ");
      return {
        fechaInicial: handleObtenerFechaInicial(aux[0]),
        fechaFinal: handleObtenerFechaFinal(aux[1]),
        signo: signo.nombre,
      };
    });
    const fechaUsuario = fechaUsuarioParseDate(datos.fechaNacimiento);
    const signoUsuario = obtenerSignoUsuario(fechas, fechaUsuario);
    for (let i = 0; i < signos.length; i++) {
      if (signos[i].nombre === signoUsuario) {
        route.push(
          `/horoscopo/` +
            btoa(signos[i].nombre) +
            `/?nombre=` +
            datos.nombre +
            `&fechaNacUser=` +
            datos.fechaNacimiento
        );
      }
    }
  };

  const handleObtenerFechaInicial = (aux) => {
    let array = aux.split(" de ");
    let dia = array[0];
    let mes = array[1];
    return new Date(2020, formatMes(mes), dia);
  };

  const handleObtenerFechaFinal = (aux) => {
    let array = aux.split(" de ");
    let dia = array[0];
    let mes = array[1];
    return new Date(2020, formatMes(mes), dia);
  };

  return (
    <div className={style.contenedorEtapaDos}>
      <div className={style.etapaDos}>
        <div className={style.contenedorImagen}>
          <img src="/material/step2.png" />
        </div>
        <h1 className={style.tituloEtapaDos}>Ingresa tus Datos</h1>
        <div>
          <div className={style.grupo}>
            <label>Nombre:</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="nombre"
            ></input>
          </div>
          <div className={style.grupo}>
            <label>Email:</label>
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
            ></input>
          </div>
          <div className={style.grupo}>
            <label>Fecha de Nacimiento:</label>
            <input
              onChange={handleInputChange}
              type="date"
              name="fechaNacimiento"
            ></input>
          </div>
        </div>
        <div className={style.botones}>
          <Link href={`/genero/` + btnEstado}>
            <a className={style.azul}>Volver</a>
          </Link>
          <div onClick={handleContinuar} className={style.naranja}>
            Continuar
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtapaDos;
