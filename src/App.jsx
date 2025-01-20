import React from 'react'; 
import { useState } from 'react';
import FigmaComponent from './Components/figmaComponents'; 

function App() {
  const [count, setCount] = useState(0); 

  return (
    <div>
      <FigmaComponent />
    </div>
  );
}

export default App;

