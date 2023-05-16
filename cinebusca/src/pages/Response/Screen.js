import './Screen.css';
import React, { useState, useEffect } from 'react';




function Screen() {
  const [dados0, setDados0] = useState({});
  const [dados1, setDados1] = useState({});
  const [dados2, setDados2] = useState({});

  useEffect(() => {
    // Recupera os dados do primeiro filme do localStorage
    const dadosSalvos0 = localStorage.getItem('dados0');
    if (dadosSalvos0) {
      setDados0(JSON.parse(dadosSalvos0));
    }
    // Recupera os dados do segundo filme do localStorage
    const dadosSalvos1 = localStorage.getItem('dados1');
    if (dadosSalvos1) {
      setDados1(JSON.parse(dadosSalvos1));
    }
    // Recupera os dados do terceiro filme do localStorage
    const dadosSalvos2 = localStorage.getItem('dados2');
    if (dadosSalvos2) {
      setDados2(JSON.parse(dadosSalvos2));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div class="Title">
          <p class="P-title">
            CINEBUSCA
          </p>
        </div>
        <div className='return_button'><button className="return" type="button" onClick={retornar}>RETURN</button></div>
      </header>
      <body className="Movies-body">
        
        <section className="Form-movies">
        <div className="movies">
            <p className="P-form-title" id="movie0_infos">{dados0.title}</p>
            <p className="P-form-description">{dados0.overview}</p>
            <p className="P-form-infos"> Release: {dados0.release_year}  |  Runtime: {dados0.runtime}  |  Genres: {dados0.genres}  |  Vote Average: {dados0.vote_average}  |  Language: {dados0.original_language}</p>
          </div>
          <div className="movies">
          <p className="P-form-title" id="movie1_infos">{dados1.title}</p>
            <p className="P-form-description">{dados1.overview}</p>
            <p className="P-form-infos"> Release: {dados1.release_year}  |  Runtime: {dados1.runtime}  |  Genres: {dados1.genres}  |  Vote Average: {dados1.vote_average}  |  Language: {dados1.original_language}</p>
          </div>
          <div className="movies">
          <p className="P-form-title" id="movie2_infos">{dados2.title}</p>
            <p className="P-form-description">{dados2.overview}</p>
            <p className="P-form-infos"> Release: {dados2.release_year}  |  Runtime: {dados2.runtime}  |  Genres: {dados2.genres}  |  Vote Average: {dados2.vote_average}  |  Language: {dados2.original_language}</p>
          </div>
        </section>
      </body>
    </div>
  );
}

function retornar() {
  window.location.href = '/';
}


export default Screen;
