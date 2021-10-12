import { useState } from "react";
import html2canvas from "html2canvas";
import './App.css';

function App() {
  // estados de react
  const [linea1, setLinea1] = useState();
  const [linea2, setLinea2] = useState();
  const [imagen, setImagen] = useState();

  //crear una funcion para el atributo onChange en la flag input
  const onChangeLinea1 = function(evento) {
    /* */
    setLinea1(evento.target.value);
  };
  const onChangeLinea2 = function(evento) {
    /* */
    setLinea2(evento.target.value);
  };
  const onChangeImagen = function(evento) {
    /* */
    setImagen(evento.target.value);
  };
  /* Funcion para Exportar*/
  const onClickExportar = function(evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      // document.body.appendChild(canvas)
      var img = canvas.toDataURL("image/jpg");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
      });
    };


  return (
    <div className="App">
      {/* Select picker de memes */}
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Chanel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br/>
      {/* input text - primer linea */}
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" /><br/>
      {/* input text - segunda linea */}
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" /><br/>
      {/* boton exportar */}
      <button onClick={onClickExportar}>Exportar</button>
      {/* estructura delmeme */}
      <div className="meme" id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span>
        <img src={`img/${imagen}.jpg`} />
      </div>
    </div>
  );
}

export default App;
