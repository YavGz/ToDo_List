import logo from './logo.svg';
import './App.css';
import './Card.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div className="card-container">
          <img src="" alt='imagen por preparar'></img>
          <p>
            La imagen aun no está definida
          </p>
        </div>

      </header>


    </div>
  );
}

export default App;
