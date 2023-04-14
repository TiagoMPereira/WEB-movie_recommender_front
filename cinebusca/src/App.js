import './App.css';
import React, { useState } from 'react';
import screen from './screen.js';



//////////////////////////////////////////////////////////////

const styles = {
  container: {
    display: 'flex',
  },
  selectWrapper: {
    marginRight: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
};



//////////////////////////////////////////////////////////////

function App() {
  const [width, setWidth] = useState(1900);

  const changeWidth = (event) => {
    setWidth(event.target.value);
  };

  //////////////////////////////////////////////////////////////

  const [height, setHeight] = useState(0);

  const changeHeight = (event) => {
    setHeight(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div class="Title">
          <p class="P-title">
            CINEBUSCA
          </p>
        </div>
      </header>
      <body className="App-body">
        <section className="Form">
          <div>
            <p className="P-form-title">Gender</p>
            <p className="P-form-description">You can select up to 3 genders</p>
            <div style={styles.container}>
              <div style={styles.selectWrapper}>
                <select id="select1">
                  <option value="option1">-</option>

                  <option value="option2">Action</option>
                  <option value="option3">Family</option>
                  <option value="option3">Adventure</option>
                  <option value="option3">Horror</option>

                </select>
              </div>
              <div style={styles.selectWrapper}>
                <select id="select2">
                  <option value="option1">-</option>
                  <option value="option2">Action</option>
                  <option value="option3">Family</option>
                  <option value="option3">Adventure</option>
                  <option value="option3">Horror</option>

                </select>
              </div>
              <div style={styles.selectWrapper}>
                <select id="select3">
                  <option value="option1">-</option>
                  <option value="option2">Action</option>
                  <option value="option3">Family</option>
                  <option value="option3">Adventure</option>
                  <option value="option3">Horror</option>

                </select>
              </div>
            </div>
          </div>
          <div>
            <p className="P-form-title">Release year</p>
            <p className="P-form-description">Select the release year of the movie you expect</p>
            <div>
              <input
                type='range'
                onChange={changeWidth}
                min={1900}
                max={2023}
                step={1}
                value={width}
                className='custom-slider'
              ></input>
              <h4 class = "canto">YEAR: {width}</h4>
              <div class = "checkbox">
                  <input type="checkbox" class="checkbox-round-year"/>
                <span>
                  <label class = "check" for="checkbox">ANY  </label>
                </span>
              </div> 
            </div>
          </div>
          <div>
            <p className="P-form-title">Runtime</p>
            <p className="P-form-description">Select the runtime, in minutes, of the movie you expect</p>
            <div>
              <input
                type='range'
                onChange={changeHeight}
                min={0}
                max={200}
                step={1}
                value={height}
                className='custom-slider'
              ></input>
              <h4 class = "canto">MIN: {height}</h4>
              <div class = "checkbox">
                  <input type="checkbox" class="checkbox-round-runtime"/>
                <span>
                  <label class = "check" for="checkbox">ANY  </label>
                </span>
              </div> 
            </div>
          </div>
          <div>
            <p className="P-form-title">Language</p>
            <p className="P-form-description">Select the main language of the movie you expect</p>
            <div style={styles.selectWrapper}>
                <select id="select4">
                  <option value="option1">-</option>
                  <option value="option2">English</option>
                  <option value="option3">Portuguese</option>
                  <option value="option3">Spanish</option>

                </select>
              </div>
          </div>
        </section>
        <div class = "button_send">
          <h1></h1>
          <button class="submit" type="button" onClick={handleSubmit}>RECOMMEND</button>
        </div>
      </body>
    </div>
  );
}

//////////////////////////////////////////////////////////////

function isFormValid() {
  const genderSelects = document.querySelectorAll('#select1, #select2, #select3');
  const releaseYearInput = document.querySelector('input[type="range"]');
  const runtimeInput = document.querySelector('input[type="range"]');
  const languageSelect = document.querySelector('#select4');
  const releaseYearCheckbox = document.querySelector('.checkbox-round-year');
  const runtimeCheckbox = document.querySelector('.checkbox-round-runtime');

  let changesCount = 0;

  if (Array.from(genderSelects).some((select) => select.value !== 'option1')) {
    changesCount++;
  }

  if (releaseYearInput.value !== '1900' || releaseYearCheckbox.checked) {
    changesCount++;
  }

  if (runtimeInput.value !== '0' || runtimeCheckbox.checked) {
    changesCount++;
  }

  if (languageSelect.value !== 'option1') {
    changesCount++;
  }


///////////////////////////////////////////////////

function handleSubmit() {
  if (!isFormValid()) {
    alertNew();
    return;
  }


}
////////////////////////////////////////////////



function alertNew() {
  // Crie o elemento de alerta personalizado
  var alertaPersonalizado = document.createElement("div");
  alertaPersonalizado.classList.add("custom-alert");

  // Adicione o título
  var titulo = document.createElement("h2");
  titulo.classList.add("title");
  titulo.style.color = "red";

  titulo.style.fontSize = "36px";
  titulo.textContent = "MISSING INFORMATION";
  alertaPersonalizado.appendChild(titulo);


  // Adicione a mensagem
  var mensagem = document.createElement("p");
  mensagem.classList.add("message");
  mensagem.style.color = "white";

  mensagem.style.fontSize = "20px";
  mensagem.textContent = "You must provide at least 3 informations about the movie that you expect";
  alertaPersonalizado.appendChild(mensagem);


  // Adicione o botão de fechar
  var botaoFechar = document.createElement("button");
  botaoFechar.classList.add("close-button");
  botaoFechar.style.backgroundColor = "red";
  botaoFechar.style.color = "white";
  botaoFechar.textContent = "OK";
  alertaPersonalizado.appendChild(botaoFechar);

  // Adicione o evento de click para fechar o alerta
  botaoFechar.addEventListener("click", function() {
    alertaPersonalizado.style.display = "none";
  });

  // Adicione o elemento de alerta personalizado à página
  document.body.appendChild(alertaPersonalizado);
}


export default App;
