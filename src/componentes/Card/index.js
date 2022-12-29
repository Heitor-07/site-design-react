
import './style.css';

export default function Card(props){
    return(
        <div>
            <div id='card' className={props.versaoEscuro ? 'card-escuro' : 'card-claro'}>
                <p>{props.data}</p>
                <h4>{props.titulo}</h4>
                <p>{props.nota}</p>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}