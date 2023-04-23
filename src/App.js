import React, {useState, useCallback} from "react";

import Button from './component/UI/Button/Button';
import './App.css';
import DemoOutput from "./component/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App Running');

  const toggleParaHandler =  useCallback(() =>{
    if(allowToggle) {
    setShowParagraph((prevshowParagraph) => !prevshowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Paragraph</Button>
      <Button onClick={toggleParaHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;