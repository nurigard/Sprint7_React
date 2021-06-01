import React from 'react';
import './App.css';
import Linia from "./components/Linia";
import obraTeatre from "./obraTeatre";

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
    <div className="App">
      {obraTeatre.map((Line,index) => <Linia key={index} dades={Line}/> )}
    </div>
  );  
}

export default App;
