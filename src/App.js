import './App.css';
import AppBar from './Components/Base/AppBar';
//import TimeBar from "./Components/Base/TimeBar"

function App() {

  //funcion para pasar como parametro a myAlert y myAlert como prop para el cmop
  const alerta = () => {
    alert("esta es una alerta");
  };

  return (
    <div className="App">
      <AppBar
      //pasar los props del componente AppBar:
      title="Mi primera App"
      subtitle="Ya funciona wuu"   
    //  tiempo= {<TimeBar />}  //pasamos el componente de TimeBar como prop de tiempo (que viene del componente AppBar)
      myAlert={alerta}
    />
    </div>
    
    
    
  );
}

export default App;
