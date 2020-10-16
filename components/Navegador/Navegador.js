import Link from 'next/link';
import style from './Navegador.module.css'
const Navegador = ({ title}) => {

    return(
        <nav className={style.contenedorNavegador}>
            <Link  href="/"><img src="/material/volver.png" className={style.volverHome}/></Link>
            <h2>{title}</h2>
        </nav>
    )

}
export default Navegador


   