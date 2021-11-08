document.querySelector(".formRegistro").hidden = false;

document.querySelector(".enviar").addEventListener("click", function (event) {
    event.preventDefault();
    let nombre = document.querySelector("input[name='nombre']").value;
    let apellido = document.querySelector("input[name='apellido']").value;
    let direccion = document.querySelector("input[name='direccion']").value;
    let cp = document.querySelector("input[name='cp']").value;
    let poblacion = document.querySelector("input[name='poblacion']").value;
    let pais = document.querySelector("input[name='pais']").value;
    let email = document.querySelector("input[name='email']").value;
    let password = document.querySelector("input[name='password']").value;
    let confirm = document.querySelector("input[name='confirm']").value;

    let nuevoCliente = { nombre: nombre, apellido: apellido, direccion: direccion, cp: cp, poblacion: poblacion, pais: pais, email: email, password: password };
    let body = /*BORIS*/JSON.stringify(nuevoCliente);

    if (confirm !== password) {
        document.querySelector(".error").innerHTML = "La contraseña no coincide. Por favor, reescriba su contraseña."
    } else {
        // Si introducimos en el input nombre "adminOwner" y en la contraseña "admin123", se oculta todo el documento
        // y se carga el menú del owner:
        if (nombre == "adminOwner" && password == "admin123") {
            // Accede a menú privado del dueño donde tiene control total, que está en div hidden, y lo activamos:
            document.querySelector(".formRegistro").hidden = true;
            document.querySelector(".menuOwner").hidden = false;
            // En ese menú, el dueño puede añadir, editar y borrar datos de la API.
        } else {
            // Mandamos datos de registro para el cliente
            alert("SUCCESS");
        /*fetch('/clientes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
        });
    */}
    }
})
