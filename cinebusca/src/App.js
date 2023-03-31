import './App.css';
import React, { useState } from 'react';

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
                  <option value="option1">Any</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div style={styles.selectWrapper}>
                <select id="select2">
                  <option value="option1">Any</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div style={styles.selectWrapper}>
                <select id="select3">
                  <option value="option1">Any</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
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
              <h4 class = "canto">ANO: {width}</h4>
              <div class = "tamanho"></div>
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
                min={1}
                max={200}
                step={1}
                value={height}
                className='custom-slider'
              ></input>
              <h4 class = "canto">MIN: {height}</h4>
              <div class = "tamanho"></div>
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
                <select id="select1">
                  <option value="option1">Any</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
          </div>
        </section>
        <div class = "button_send">
          <h1></h1>
          <button class = "submit" type="button">RECOMMED</button>
        </div>
      </body>
    </div>
  );
}

export default App;
