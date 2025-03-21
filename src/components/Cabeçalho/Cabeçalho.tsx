import estilo from './Cabeçalho.module.css'
import logotipo from '../../assets/logotipo.png'

function Cabecalho() {
    return (
        <header className={estilo.cabecalho}>
            <img src={logotipo} alt="logotipo" />
            <a href="#">Login</a>
        </header>
    );

}

export default Cabecalho;