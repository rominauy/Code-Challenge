document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("name").value;
    const apellido = document.getElementById("surname").value;
    const fechaNacimiento = document.getElementById("date").value;

    const data = { 
        nombre: nombre, apellido: apellido, fechaNacimiento: fechaNacimiento 
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then (data => { 
        
        console.log("Respuesta del servidor:", data);
        alert("Datos enviados correctamente");
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
        alert("Error al enviar los datos");
    });
    
});




