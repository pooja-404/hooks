
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Appcounter from './components/Appcounter';
import Useeffect from './components/Useeffect';
import { useEffect, useState } from 'react';
import Useref from './components/Useref';
import Toggle from './components/DarkModeToggle';
import DarkModeToggle from './components/DarkModeToggle';

function App() {

  return (
    <div className="App">
      <Appcounter />
      <Useeffect />
      <Useref />
      <DarkModeToggle />
    </div>
  );
}

export default App;
