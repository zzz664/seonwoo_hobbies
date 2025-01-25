import './App.css';
import { useState } from 'react';
import Navigator from './components/layouts/Navigator.jsx';
import * as Styled from './components/styledComponents.js';
import Home from './components/pages/Home.jsx';
import Introduce from './components/pages/Introduce.jsx';
import Values from './components/pages/Values.jsx';
import Projects from './components/pages/Projects.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigator></Navigator>
      <Styled.contentDiv>
        <Home></Home>
        <Introduce></Introduce>
        <Values></Values>
        <Projects></Projects>
      </Styled.contentDiv>
    </>
  );
}

export default App;
