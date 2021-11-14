document.querySelector(".formRegistro").hidden = false;

document.querySelector(".enviar").addEventListener("click", function (event) {
    event.preventDefault();
    let nombre = document.querySelector("input[name='nombre']").value;
    let email = document.querySelector("input[name='email']").value;
    let password = document.querySelector("input[name='password']").value;
    let confirm = document.querySelector("input[name='confirm']").value;

    let nuevoCliente = { nombre: nombre, email: email, password: password, admin: false };
    let body = /*BORIS*/JSON.stringify(nuevoCliente);

    if (confirm !== password) {
        document.querySelector(".error").innerHTML = "La contraseña no coincide. Por favor, reescriba su contraseña."
    } else {
        nombreLower = nombre.toLowerCase();
        nombreUpper = nombre.toUpperCase();
        if (nombreLower == "admin" && nombreUpper == "ADMIN") {
            document.querySelector(".error").innerHTML = "Nombre de usuario reservado. Por favor, elija otro nombre.";
        } else {
            // Mandamos datos de registro para el cliente

            fetch('/clientes', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: body
            }).then(function (response) {
                return response.json()
            }).then(function (res) {
                console.log(res)
                document.querySelector(".error").innerHTML = "Usuario registrado.";
            });
        }
    }
})

/*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input")

/*=== Add focus ===*/
function addfocus() {
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/*=== Remove focus ===*/
function remfocus() {
    let parent = this.parentNode.parentNode
    if (this.value == "") {
        parent.classList.remove("focus")
    }
}

/*=== To call function===*/
inputs.forEach(input => {
    input.addEventListener("focus", addfocus)
    input.addEventListener("blur", remfocus)
})