import React from 'react';
import './App.css';
import Linia from "./components/linia/Linia";
import obraTeatre from "./obraTeatre";
import {GlobalStyle} from "./styled";
import {ContenidorLinies} from "./components/linia/Linia.styled"

/*
function App() {
  return (
    <div className="App">
      {obraTeatre.map(function(Line,index){
        return <Linia key={index} dades={Line}/>   
      })}
    </div>
  );
}
export default App;
*/


//En ES6
const App = () => {
  return (
    <ContenidorLinies className="Contenidor">
      <GlobalStyle/>
      {obraTeatre.map((Line,index) => <Linia key={index} dades={Line}/> )}
      
    </ContenidorLinies>
  );  
}

export default App;
