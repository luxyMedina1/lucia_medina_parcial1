import porfile from './porfile.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={porfile} className="App-logo" alt="logo" />
        <p>
          ETE ES MI PRIMER HOLA MUNDO EN REACT -MEDINA LUCIA
        </p>
        <a
          className="App-link"
          href="https://www.utd.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
        >
          visita el sitio web de la UTD
        </a>
      </header>
    </div>
  );
}

export default App;
