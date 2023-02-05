import React, { useState } from 'react';

import './styles.css';

export function LandingPage(){
    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
    }

    return(
        <div className={theme ? "dark-mode" : "ligth-mode"}>     
            <header>
                <div className="limit-section">
                    <img src="assets/barbearia-logo.png" alt="logomarca" className="header-icon" />
                    <button onClick={handleTheme} className={theme ? "dark-mode" : "ligth-mode"}>
                            <img src={theme ? "assets/moon.png" : "assets/sun.png"} alt="icone" className="button-icon" /> 
                            {
                                !theme ? `Ligth` : `Dark`
                            }
                    </button>
                </div>    
            </header>

            <section className="section-banner">
            </section>
            
            <section className="limit-section section-text">
                <div className="limit-section">
                    <h1 className="title">Bem-vindo a Barber Shop</h1>
                    <p className="first-text">
                        Nossa barbearia sempre oferece profissionais de qualidade e
                        estamos prontos para lidar com suas maiores expectativas.
                    </p>
                    <p className="second-text">
                        Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
                        uma equipe premiada que demonstrou o talento de mestres barbeiros
                        em vários concursos de estilo. Deixe nosso barbeiro ser seu
                        estilista pessoal e você nunca ficará desapontado.
                    </p>
                    <p className="signature">S. Kelly</p>
                </div>
            </section>
        </div>   
    );
}