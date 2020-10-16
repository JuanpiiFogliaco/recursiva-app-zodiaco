import style from '../../styles/Genero.module.css';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Logo from '../../components/Logo/Logo';
import EtapaUno from '../../components/EtapaUno/EtapaUno';
import Layout from '../../components/Layout';


const Genero = ({btnHome}) => {
  
  const route = useRouter();
  const [estado, setEstado] = useState([]);
  
  useEffect(() => {
    try {
      validarEstado(parseeBoolean(atob(btnHome)))
    } catch (error) {
      route.push('/')
    }
  },[]);

  const validarEstado = (btnHome) => {
    switch(btnHome){
        case true: setEstado(btnHome);
            break;
        case false: route.push('/');
            break;
        default : route.push('/');     
    } 
  }

  const parseeBoolean = (string) =>{
      if(string === 'true'){
         string = true;
         return string;
      }
      string = false;

      return string;
  }

    return ( 
      <Layout title={'Tu Genero'}>   
      <div className={style.contenedorGenero}>
         {estado === true ?  
             <EtapaUno btnHome={btnHome}/> 
         : 
             <Logo></Logo>
         }
      </div>
      </Layout>
    )
}
export default Genero;

Genero.getInitialProps = ({query}) => {
  return {
      btnHome: query.genero
    }
}

 