import { useState } from 'react';
import './style.css';

import SecaoBanner from '../SecaoBanner';

export default function Topo(props){

    const iconSun = '/assets/sun.png';
    const iconMoon = '/assets/moon.png';

    return(
        <header className={ props.versaoEscuro ? 'topo-escuro' : 'topo-claro' }>
            <img src="assets/logo.png" alt="logo" />
            <button className={ props.versaoEscuro ? 'borda-claro' : 'borda-escuro' } onClick={ props.alteraTema }>
                <img src={ props.versaoEscuro ? iconSun : iconMoon } alt="lua"/>
            </button>
        </header>
    )
}
