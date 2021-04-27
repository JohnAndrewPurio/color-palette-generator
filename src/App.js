import './App.css';
import ColorGen from './ColorGen';
import { useState } from 'react';

function App() {
  const [colorsArr, setColorsArr] = useState( () => ColorGen() );
  const generateRandomColors = () => {
    setColorsArr( ColorGen() );
  }

  return (
    <div className="App">
      <h2>Color Palette Generator</h2>
      <button className="generate" onClick={generateRandomColors} >Generate</button>
      <div className="content">
        {colorsArr}
      </div>
    </div>
  );
}

export default App;
