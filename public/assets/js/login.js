document.querySelector(".loginEnviar").addEventListener("click", function (event) {
    event.preventDefault();

    let nombre = document.querySelector("input[name='loginNombre']").value;
    let password = document.querySelector("input[name='loginPassword']").value;

    let nuevoLogin = { nombre: nombre, password: password };
    let body = /*BORIS*/JSON.stringify(nuevoLogin);

    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        console.log(res)

        if (res == true) {
            //document.querySelector(".formLogin").hidden = true;
            document.querySelector(".menuOwner").hidden = false;
            document.querySelector(".menuOwner").innerHTML = `<br><br><br>Bienvenido, ADMIN.<br><form class="menuOwner" hidden>
                    <h2>Panel de control de base de datos de la página:</h2><br>
                    ¿Con qué base de datos desea operar?:
                    <select class="selectCollection">
                    <option value='' selected disabled>Seleccione una colección:</option>
                    <option value='clientes'>Clientes</option>
                    <option value='comics'>Comics</option>
                    <option value='cartas'>Juegos de cartas</option>
                    <option value='juegos'>Juegos de mesa</option>
                    <option value='snacks'>Snacks</option>
                    <option value='ventas'>Ventas</option>
                    </select><br>
                    </form>`;

            document.querySelector(".selectCollection").addEventListener("change", ifBases);
            function ifBases() {
                let option = document.querySelector(".selectCollection").value;
                if (option == 'clientes') {
                    selectClientes();
                    formClientes();
                } else if (option == 'comics') {
                    selectComics();
                    formComics();
                } else if (option == 'cartas') {
                    selectCartas();
                    formCartas();
                } else if (option == 'juegos') {
                    selectJuegos();
                    formJuegos();
                } else if (option == 'snacks') {
                    selectSnacks();
                    formSnacks();
                } else if (option == 'ventas') {
                    selectVentas();
                    formVentas();
                }
            }
        } else if (res == false) {
            document.querySelector(".error").innerHTML = `<br><br>Ha iniciado sesión.<br><a href="index.html">⭐Volver a página principal:</a>`;
        }
    });
})

function selectClientes() {
    let infoAdmin = document.querySelector(".adminInfo");
    infoAdmin.innerHTML = "";
    fetch('/clientes')
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            for (i = 0; i < (res.length); i++) {
                let clientesV = infoAdmin.innerHTML += `<p>Usuario ${i + 1}: <b>${res[i].nombre}</b>, Email: <b>${res[i].email}</b>, Password: <b>${res[i].password}</b></p>`;
            }
        })
}

function selectComics() {
    let infoAdmin = document.querySelector(".adminInfo");
    infoAdmin.innerHTML = "";
    fetch('/comics')
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            console.log(res);
            for (i = 0; i < (res.length); i++) {
                let comicsV = infoAdmin.innerHTML += `<p>Cómic ${i + 1}: <b>${res[i].nombre}</b>, Precio: <b>${res[i].precio}</b>, URL imagen: <b>${res[i].imagen}</b></p>`;
            }
        })
}

function selectCartas() {
    let infoAdmin = document.querySelector(".adminInfo");
    infoAdmin.innerHTML = "";
    fetch('/cartas')
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            console.log(res);
            for (i = 0; i < (res.length); i++) {
                let cartasV = infoAdmin.innerHTML += `<p>Juego de cartas ${i + 1}: <b>${res[i].nombre}</b>, Precio: <b>${res[i].precio}</b>, URL imagen: <b>${res[i].imagen}</b></p>`;
            }
        })
}

function selectJuegos() {
    let infoAdmin = document.querySelector(".adminInfo");
    infoAdmin.innerHTML = "";
    fetch('/juegos')
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            console.log(res);
            for (i = 0; i < (res.length); i++) {
                let juegosV = infoAdmin.innerHTML += `<p>Juegos de mesa ${i + 1}: <b>${res[i].nombre}</b>, Precio: <b>${res[i].precio}</b>, URL imagen: <b>${res[i].imagen}</b></p>`;
            }
        })
}

function selectSnacks() {
    let infoAdmin = document.querySelector(".adminInfo");
    infoAdmin.innerHTML = "";
    fetch('/snacks')
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            console.log(res);
            for (i = 0; i < (res.length); i++) {
                let snacksV = infoAdmin.innerHTML += `<p>Snack ${i + 1}: <b>${res[i].nombre}</b>, Precio: <b>${res[i].precio}</b>, URL imagen: <b>${res[i].imagen}</b></p>`;
            }
        })
}

function selectVentas() {
    let infoAdmin = document.querySelector(".adminInfo");
    infoAdmin.innerHTML = "";
    fetch('/ventas')
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            console.log(res);
            for (i = 0; i < (res.length); i++) {
                let ventasV = infoAdmin.innerHTML += `<p>Ticket ${i + 1}: <b>${res[i].nombre}</b>, Precio: <b>${res[i].precio}</b>, URL imagen: <b>${res[i].imagen}</b></p>`;
            }
        })
}

function formClientes() {
    document.querySelector(".adminForm").innerHTML = `<input type="text" name="nombreCliente" placeholder="Nombre:">
    <input type="text" name="emailCliente" placeholder="Email:" />
    <input type="text" name="passwordCliente" placeholder="Password:" /><br>
    <button class="post">Añadir entrada</button>
    <button class="put">Modificar entrada</button>
    <button class="delete">Borrar entrada</button>`

    document.querySelector(".post").addEventListener("click", function (event) {
        event.preventDefault();
        let nombreCliente = document.querySelector("input[name='nombreCliente']").value;
        let emailCliente = document.querySelector("input[name='emailCliente']").value;
        let passwordCliente = document.querySelector("input[name='passwordCliente']").value;
        let nuevoCliente = { nombre: nombreCliente, email: emailCliente, password: passwordCliente };
        let body = /*BORIS*/JSON.stringify(nuevoCliente);

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
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Cliente añadido a la base de datos.</p>`;
        });
    })

    document.querySelector(".put").addEventListener("click", function (event) {
        event.preventDefault();
        let nombreCliente = document.querySelector("input[name='nombreCliente']").value;
        let emailCliente = document.querySelector("input[name='emailCliente']").value;
        let passwordCliente = document.querySelector("input[name='passwordCliente']").value;
        let nuevoCliente = { nombre: nombreCliente, email: emailCliente, password: passwordCliente };
        let body = /*BORIS*/JSON.stringify(nuevoCliente);
        console.log(body);
        fetch('/clientes/put', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Cliente modificado en la base de datos.</p>`;
        });
    })

    document.querySelector(".delete").addEventListener("click", function (event) {
        event.preventDefault();
        let nombreCliente = document.querySelector("input[name='nombreCliente']").value;
        let emailCliente = document.querySelector("input[name='emailCliente']").value;
        let passwordCliente = document.querySelector("input[name='passwordCliente']").value;
        let nuevoCliente = { nombre: nombreCliente, email: emailCliente, password: passwordCliente };
        let body = /*BORIS*/JSON.stringify(nuevoCliente);
        console.log(body);
        fetch('/clientes/delete', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Cliente eliminado de la base de datos.</p>`;
        });
    })
}

function formComics() {
    document.querySelector(".adminForm").innerHTML = `<input type="text" name="nombre" placeholder="Nombre:">
    <input type="text" name="precio" placeholder="Precio:" />
    <input type="text" name="img" placeholder="URL imagen:" /><br>
    <button class="post">Añadir entrada</button>
    <button class="put">Modificar entrada</button>
    <button class="delete">Borrar entrada</button>`

    document.querySelector(".post").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/comics', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Cómic añadido a la base de datos.</p>`;
        });
    })

    document.querySelector(".put").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/comics/put', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Cómic modificado en la base de datos.</p>`;
        });
    })

    document.querySelector(".delete").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/comics/delete', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Cómic eliminado de la base de datos.</p>`;
        });
    })
}

function formCartas() {
    document.querySelector(".adminForm").innerHTML = `<input type="text" name="nombre" placeholder="Nombre:">
    <input type="text" name="precio" placeholder="Precio:" />
    <input type="text" name="img" placeholder="URL imagen:" /><br>
    <button class="post">Añadir entrada</button>
    <button class="put">Modificar entrada</button>
    <button class="delete">Borrar entrada</button>`

    document.querySelector(".post").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/cartas', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Juego de cartas añadido a la base de datos.</p>`;
        });
    })

    document.querySelector(".put").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/cartas/put', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Juego de cartas modificado en la base de datos.</p>`;
        });
    })

    document.querySelector(".delete").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/cartas/delete', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Juego de cartas eliminado de la base de datos.</p>`;
        });
    })
}

function formJuegos() {
    document.querySelector(".adminForm").innerHTML = `<input type="text" name="nombre" placeholder="Nombre:">
    <input type="text" name="precio" placeholder="Precio:" />
    <input type="text" name="img" placeholder="URL imagen:" /><br>
    <button class="post">Añadir entrada</button>
    <button class="put">Modificar entrada</button>
    <button class="delete">Borrar entrada</button>`

    document.querySelector(".post").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/juegos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Juego de mesa añadido a la base de datos.</p>`;
        });
    })

    document.querySelector(".put").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/juegos/put', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Juego de mesa modificado en la base de datos.</p>`;
        });
    })

    document.querySelector(".delete").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/juegos/delete', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Juego de mesa eliminado de la base de datos.</p>`;
        });
    })
}

function formSnacks() {
    document.querySelector(".adminForm").innerHTML = `<input type="text" name="nombre" placeholder="Nombre:">
    <input type="text" name="precio" placeholder="Precio:" />
    <input type="text" name="img" placeholder="URL imagen:" /><br>
    <button class="post">Añadir entrada</button>
    <button class="put">Modificar entrada</button>
    <button class="delete">Borrar entrada</button>`

    document.querySelector(".post").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/snacks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Snack añadido a la base de datos.</p>`;
        });
    })

    document.querySelector(".put").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/snacks/put', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Snack modificado en la base de datos.</p>`;
        });
    })

    document.querySelector(".delete").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/snacks/delete', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Snack eliminado de la base de datos.</p>`;
        });
    })
}

function formVentas() {
    document.querySelector(".adminForm").innerHTML = `<input type="text" name="nombre" placeholder="Nombre:">
    <input type="text" name="precio" placeholder="Precio:" />
    <input type="text" name="img" placeholder="URL imagen:" /><br>
    <button class="post">Añadir entrada</button>
    <button class="put">Modificar entrada</button>
    <button class="delete">Borrar entrada</button>`

    document.querySelector(".post").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/ventas', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Ticket añadido a la base de datos.</p>`;
        });
    })

    document.querySelector(".put").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/ventas/put', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Ticket modificado en la base de datos.</p>`;
        });
    })

    document.querySelector(".delete").addEventListener("click", function (event) {
        event.preventDefault();
        let nombre = document.querySelector("input[name='nombre']").value;
        let precio = document.querySelector("input[name='precio']").value;
        let img = document.querySelector("input[name='img']").value;
        let nuevo = { nombre: nombre, precio: precio, imagen: img };
        let body = /*BORIS*/JSON.stringify(nuevo);

        fetch('/ventas/delete', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }).then(function (response) {
            return response.json()
        }).then(function (res) {
            console.log(res)
            document.querySelector(".adminForm").innerHTML += `<br><br><p>Ticket eliminado de la base de datos.</p>`;
        });
    })
}

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
