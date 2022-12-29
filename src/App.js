import { useState } from 'react';
import './App.css';

import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Rodape from "./componentes/Rodape";

function App() {

  const [temaEscuro, setTemaEscuro] = useState(false);

  const mudarTema = () => {
    setTemaEscuro(!temaEscuro);
  }

  return (
    <div className="App">
      <Topo alteraTema={mudarTema} versaoEscuro={ temaEscuro }/>
      <SecaoBanner versaoEscuro={ temaEscuro } />
      <SecaoExperienciaTrabalho versaoEscuro={ temaEscuro }/>
      <Rodape versaoEscuro={ temaEscuro }/>
    </div>
  );
}

export default App;
