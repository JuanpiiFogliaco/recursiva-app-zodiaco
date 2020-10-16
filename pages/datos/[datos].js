import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import EtapaDos from "../../components/EtapaDos/EtapaDos";

const Datos = ({ btnGenero, btnEstado }) => {
  const route = useRouter();
  const [estado, setEstado] = useState([]);

  useEffect(() => {
    try {
      validar(parseInt(atob(btnGenero)));
    } catch (error) {
      console.log(error);
      route.push("/");
    }
  }, []);

  const validar = (genero) => {
    if (genero > 0) {
      setEstado(genero);
    } else {
      route.push("/");
    }
  };

  return (
    <Layout title={"Tus Datos"}>
      <EtapaDos btnEstado={btnEstado} />
    </Layout>
  );
};

export default Datos;

Datos.getInitialProps = ({ query }) => {
  return {
    btnGenero: query.datos,
    btnEstado: query.estado,
  };
};
