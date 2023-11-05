import React from 'react'


export const DeleteTask = (idTaks) => {

    //console.log('Se hizo clic en el botón con ID:', idTaks);


    const result = window.confirm('¿Estás seguro de que deseas eleimiar la tarea ?')

    if (result) {

        fetch(`http://127.0.0.1:8000/delete-task/${idTaks}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {

                    alert('tarea eliminada con exito!')
                    // Luego, recarga la página
                    window.location.reload();

                } else {
                    //alert('ocurrio un error en la peticion')
                }
            })
            .then(err => {
                console.error('Error de red:', err);

            })

    }


}
