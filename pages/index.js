import style from'../styles/Home.module.css';
import Logo from '../components/Logo/Logo';
import Button from '../components/BotonHome/Boton';

export default function Home() {
  return (
    <div className={style.contenedorHome}>
      <div className={style.home}>
        <Logo/>         
        <Button/>
      </div>
    </div>
  )
}
