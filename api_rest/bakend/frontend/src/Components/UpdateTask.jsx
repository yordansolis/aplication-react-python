import React from 'react'

export const UpdateTask = (idTaks, boolean) => {

    fetch(`http://127.0.0.1:8000/update-task/${idTaks}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(boolean)
    })
        .then(response => {

            if (response.ok) {
                alert('Tarea completada!')
                // Luego, recarga la página
                window.location.reload();
            } else {
                //console.log('error al actualizar los datos');
            }
        })
        .then(err => {
            console.log('error en la red', err);
        })




}
