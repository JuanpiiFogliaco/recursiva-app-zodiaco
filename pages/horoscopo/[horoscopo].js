import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getAll } from "../../services";
import style from "../../styles/Horoscopo.module.css";
import Link from "next/link";
import { calcularCumpleaños } from "../../utils";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Horoscopo = ({ signo, nombre, nacimiento }) => {
  let [isLoading, setIsLoading] = useState(true);
  const [nDias, setNDias] = useState([]);
  const [signos, setSignos] = useState([]);
  const signoUs = signos.find((item) => item.nombre === atob(signo));

  useEffect(() => {
    setNDias(calcularCumpleaños(new Date(nacimiento)));
    getAll()
      .then(({ horoscopo }) => {
        const horoscoposKeys = Object.keys(horoscopo);
        const horoscoposList = horoscoposKeys.map((key) => {
          return {
            ...horoscopo[key],
          };
        });
        setSignos(horoscoposList);
      })
      .finally(() => setIsLoading(false));
  }, []);
  console.log(signos)
  const loading = isLoading ? (
    <Loader
      type="Puff"
      color=" #0e5090"
      height={100}
      width={100}
      timeout={3000}
    />
  ) : null;

  return (
    <Layout title={"Tu Horoscopo"}>
      {loading ? (
        <div className="loading">
          <div>{loading}</div>
        </div>
      ) : (
        <div className={style.contenedorHoroscopo}>
          <div className={style.iconSigno}>
            {signoUs ? (
              signoUs.nombre === "Acuario" ? (
                <img src="/material/boton_acuario.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {signoUs ? (
              signoUs.nombre === "Aries" ? (
                <img src="/material/boton_aries.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {signoUs ? (
              signoUs.nombre === "Cancer" ? (
                <img src="/material/boton_cancer.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {signoUs ? (
              signoUs.nombre === "Capricornio" ? (
                <img src="/material/boton_capricornio.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {signoUs ? (
              signoUs.nombre === "Escorpio" ? (
                <img src="/material/boton_escorpio.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {signoUs ? (
              signoUs.nombre === "Geminis" ? (
                <img src="/material/boton_geminis.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {signoUs ? (
              signoUs.nombre === "Leo" ? (
                <img src="/material/boton_leo.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {signoUs ? (
              signoUs.nombre === "Libra" ? (
                <img src="/material/boton_libra.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {signoUs ? (
              signoUs.nombre === "Piscis" ? (
                <img src="/material/boton_piscis.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {signoUs ? (
              signoUs.nombre === "Sagitario" ? (
                <img src="/material/boton_sagitario.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {signoUs ? (
              signoUs.nombre === "Tauro" ? (
                <img src="/material/boton_tauro.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {signoUs ? (
              signoUs.nombre === "Virgo" ? (
                <img src="/material/boton_virgo.png" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
          <div className={style.userTitle}>
            <h3>Hola {nombre} !</h3>
          </div>
          <div className={style.dataHoroscopo}>
            <h3>Tu horoscopo para hoy dice que: </h3>
            <p>
              <b>Amor: </b>
              {signoUs ? signoUs.amor : ""}
            </p>
            <p>
              <b>Salud: </b>
              {signoUs ? signoUs.salud : ""}
            </p>
            <p>
              <b>Dinero: </b>
              {signoUs ? signoUs.dinero : ""}
            </p>
            <p>
              <b>Color: </b>
              {signoUs ? signoUs.color : ""}
            </p>
            <p>
              <b>Numero: </b>
              {signoUs ? signoUs.numero : ""}
            </p>
            <p>
              <b>Fecha Signo: </b>
              {signoUs ? signoUs.fechaSigno : ""}
            </p>

            <h3>Faltan {nDias} dias para tu cumpleaños.</h3>

            <div className={style.contenedorBtnContinuar}>
              <Link href="/">
                <a className={style.btnContinuar}>Continuar</a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

Horoscopo.getInitialProps = ({ query }) => {
  return {
    signo: query.horoscopo,
    nombre: query.nombre,
    nacimiento: query.fechaNacUser,
  };
};

export default Horoscopo;
