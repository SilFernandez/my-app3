//Aplicacion que llama a componente que devuelve un titulo H3
import React from "react";

//vinculo con el componente
import TituloH3 from './Components/TituloH3'

//Función que llame al componente que retorna valores de un contador
function App() {
  return (
    <div className="App">
      <h1>Título H1</h1>
      <TituloH3/>
    </div>
  );
}

export default App;
