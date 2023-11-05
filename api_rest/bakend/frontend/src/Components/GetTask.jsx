import '../Components/Task.css';
import { useEffect, useState } from 'react';
import { AddTask } from './AddTask'; // agregar las tareas...

import { DeleteTask } from './DeleteTask';
import {UpdateTask} from './UpdateTask';


export const GetTask = () => {


  const [data, setData] = useState([]);


  useEffect(() => {     //restapuesta de datos... 
    async function fetchData() {    
      try {
        const response = await fetch('http://127.0.0.1:8000/api/tareas/');
        const json = await response.json();
        setData(json.datos);     // se guardan los datos en el arreglo de data
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
    fetchData();
  }, []);


 /** Esta funcion recibi parametros desde el padre para AGREGARLO A LA LISTA...*/
  const onRecibirValorDelHijo = (envio) => { 
    if (envio < 1) return       //para que los datos del inpot de agregar tarea no venga vacios
    setData([...data, envio]);     // lo que tenia antes mas lo que vieve 
  }



  return (
    <>
      <div>
        <AddTask agregarTarea={onRecibirValorDelHijo} className="new-task"></AddTask>
        <br />
      </div>

      <div className='lista-tareas'>
        {data.map((item) => {
          return (
            <div key={item.id} className='task'>
              <h3>{item.title}</h3>
              <p>{item.description} </p>
            
              <div className='task-comfir'>  
              {(item.completed) ? <a>✅</a>  : <a className='complete' 
                                                  onClick={() => UpdateTask(item.id ,true)}>
                                                   ⌚</a>
                                                   }

              <a className='delete-task' onClick={() => DeleteTask(item.id)}>❌</a>
              </div>
            
                
            
            </div>
          );
        })}
      </div>
    </>

  )
}

