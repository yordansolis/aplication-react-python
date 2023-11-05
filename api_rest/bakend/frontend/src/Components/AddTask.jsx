import { useState } from "react";

export const AddTask = ({ gregarTarea }) => { // Obeten el dato para regarlo a la db

    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');



    const AddTitle = (event) => {
        setInputTitle(event.target.value);
    }


    const AddDescription = (event) => {
        setInputDescription(event.target.value);
    }


    //  Funcion padre para AGREGAR LOS DATOS
    const handleSubmit = async (event) => {
       alert('Agregado con exito')

        const envio = {
            title: inputTitle,
            description: inputDescription,
            completed: false
        }

        try {
            const res = await fetch('http://127.0.0.1:8000/agregar-tarea', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(envio)
            });

            if (res.ok) {
                console.log('solitud exitosa !');
            } else {
                // La solicitud falló
                console.error('Error al enviar la solicitud POST');
            }


        } catch (error) {
            console.error('Error al enviar la solicitud POST:', error);
        }

        setInputDescription('');
        setInputTitle(''); // Limpiar input
    }


    return (
            
        <form onSubmit={handleSubmit}>

        <section className="formulario">    
            <div>
            <input type="text"
                placeholder="Ingrese el titulo"
                value={inputTitle}
                onChange={AddTitle}
                required
            />
            </div>
                <br />
            <div>
            <textarea type="text"
                placeholder="Ingrese su description"
                value={inputDescription}
                onChange={AddDescription}
                required
            />
        </div>
            </section>
            
          <br />
            <input type="submit" className="btn-add" value="Submit" />

        </form>
    )
}
