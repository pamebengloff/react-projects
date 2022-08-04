import './App.css';
import AppBar from './Components/Base/AppBar';

function App() {

  //funcion para pasar como parametro al prop myAlert de AppBar
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
    <h1>hola </h1>
    </div>
    
    
    
  );
}

export default App;
