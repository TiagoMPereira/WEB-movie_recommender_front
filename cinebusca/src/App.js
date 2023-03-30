import './App.css';

function App() {
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
          </div>
          <div>
            <p className="P-form-title">Release year</p>
            <p className="P-form-description">Select the release year of the movie you expect</p>
          </div>
          <div>
            <p className="P-form-title">Runtime</p>
            <p className="P-form-description">Select the runtime, in minutes, of the movie you expect</p>
          </div>
          <div>
            <p className="P-form-title">Language</p>
            <p className="P-form-description">Select the main language of the movie you expect</p>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
