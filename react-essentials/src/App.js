import React, { useState } from 'react';
import './App.css';


function TrueComponent() {
  return <h1>Most of the world is righty</h1>;
}

function FalseComponent() {
  return <h1>Everyone in the world is blind and deaf</h1>;
}


function App({authorized}) {
  const [settings, setSettings] = useState("Cruising");

  
  return (
    <>
    {authorized ? <TrueComponent /> : <FalseComponent />}
    <br></br><br></br><br></br><br></br>


    <h1>The current car settings is set to {settings}</h1>
    <button onClick={() => setSettings("Cruising")}>Crusing</button>
    <button onClick={() => setSettings("Accelerating")}>Accelerating</button>
    <button onClick={() => setSettings("Braking")}>Braking</button>
    </>
  )
  
}

export default App;
