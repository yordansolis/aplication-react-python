import React, { useEffect, useState } from 'react';
import "./App.css";
import './Components/Task.css';
import { GetTask } from "./Components/GetTask"; // listado de tareas...

function App() {


  return (<>
    <h1>Aplicación de tareas</h1>
    <div>
      <h2 className='title'>Tareas </h2>
      <GetTask></GetTask>
    </div>

  </>
  );
}

export default App;




