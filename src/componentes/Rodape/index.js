import './style.css';

export default function Rodape(){
    return(
        <div className="rodape" id='rodape-escuro'>
            <div className='logo'>
                <img  src="assets/logo.png" alt="logo"/>
            </div>
            <p className='paragrafo-rodape'>
            Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.
            </p>
            <div className='redesSociais'>
                <img src="assets/facebook.png" alt="facebook" />
                <img src="assets/twitter.png" alt="twitter" />
                <img src="assets/linkedin.png" alt="linkedin" />
                <img src="assets/dribble.png" alt="dribble" />
                <img src="assets/behance.png" alt="behance" />
                <img src="assets/google-plus.png" alt="google-plus" />
            </div>
            <p className='assinatura'>Copyright 2022 &copy; <span>Heitor Augusto</span> </p>
        </div>
    )
}