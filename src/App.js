import profile from './porfile.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={profile} className="App-logo" alt="Foto de perfil" />

        <h1>Evaluación Parcial 1</h1>

        <h2>Alumna: Medina Lucia</h2>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/lucia-medina-454451351"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN MY PROFILE
        </a>

        <br />

        <a
          className="App-link"
          href="https://www.medikt.com.mx/practicas/documentacion.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOCUMENTACIÓN PARCIAL 1
        </a>

      </header>
    </div>
  );
}

export default App;
