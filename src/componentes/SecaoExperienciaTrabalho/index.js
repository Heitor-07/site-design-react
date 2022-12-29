import './style.css';
import Card from "../Card"

export default function SecaoExperienciaTrabalho(props){
    return(
        <section className="secaoExperienciaTrabalho" id={ props.versaoEscuro ? 'secaoExperienciaTrabalho-bg-escuro' : 'secaoExperienciaTrabalho-bg-claro'}>
            <h2>Experiências De Trabalho</h2>
            
            <p className='paragrafo1' id={ props.versaoEscuro ? 'paragrafo1-escuro' : 'paragrafo1-claro'}>
                Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                Sites e Marketing Digital, nos empenhamos diariamente para entregar
                resultados que tragam impacto aos nossos clientes.
            </p>

            <div className='box-cards limitar-secao'>
            <Card 
                data="JUNHO 2012 - 2016"
                titulo="Web Designer"
                nota="Pied Piper StartUp."
                descricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
            />
            <Card 
                data="AGOSTO 2016 - 2019"
                titulo="Product Designer"
                nota="E Corp."
                descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra, impactando-o no momento certo"
            />
            <Card 
                data="FEVEREIRO 2019 - 2021"
                titulo="Digital Consulting"
                nota="Arasaka Inc."
                descricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução do plano de ação"
            />
     
            </div>       
        </section>
    )
}