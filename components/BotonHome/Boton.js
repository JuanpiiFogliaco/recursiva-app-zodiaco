import { useEffect, useState } from 'react';
import style from './Boton.module.css';
import Link from 'next/link';

export default function Button() {
const [btnIngresar, setBtnIngresar] = useState(false);

useEffect(() =>{
  setBtnIngresar(btoa(!btnIngresar))
},[])

const ingresar = () => {
  setBtnIngresar(true);
}

return (
      <div className={style.contenedorBotonHome}>        
          <Link href={`/genero/`+btnIngresar}>
            <a onClick={ingresar} className={style.botonHome}>INGRESAR</a>
          </Link> 
      </div> 
    )
}