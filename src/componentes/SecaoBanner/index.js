import './style.css';

export default function SecaoBanner(props){
    return(
        <section className='secao-banner'>
            <div className='banner-img' id={props.versaoEscuro ? 'efeitoEscuroBanner' : 'efeitoClaroBanner'}></div>
            <div className='banner-conteudo'>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    )
}