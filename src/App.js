import porfile from './porfile.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={porfile} className="App-logo" alt="logo" />
        <h1>
        
        Evaluacion Parcial 1    
        </h1>
        <h1>
          Alumna;Medina lucia
        </h1>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/lucia-medina-454451351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKED IN  MY PROFILE
        </a>
        <br></br>
        <a
          className="App-link"
          href="https://practicas.medikt.com.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >DOCUMENTACION PARCIAL 1 
        </a>
      </header>
    </div>
  );
}

export default App;
