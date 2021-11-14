fetch('/comics')
    .then(function (response) {
        return response.json()
    }).then(function (res) {
        let printProducts = document.querySelector(".product__container1");

        for (i = 0; i < res.length; i++) {

            printProducts.innerHTML += `<article class="product__card">

        <img src="${res[i].imagen}" alt="" class="product__img">
        
        <h3 class="product__title">${res[i].nombre}</h3>
        <span class="product__price">${res[i].precio}</span>

        <button id="comic${[i + 1]}" class="button--flex product__button">
            <i class="ri-shopping-bag-line"></i>
        </button>
        </article>`
        }
        // Comic 7
        document.querySelector("#comic5").addEventListener("click", function () {

            let nombreComic5 = "Most Big Websites Comic Books";
            let precioComic5 = "34.70€";
            let imgComic5 = "assets/img/product7.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic5 = { nombre: nombreComic5, precio: precioComic5, imagen: imgComic5 };
            let body = JSON.stringify(nuevoComic5);

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
                alert("Artículo añadido.");
            });
        })

        // Comic 10
        document.querySelector("#comic4").addEventListener("click", function () {

            let nombreComic = "The Sandman";
            let precioComic = "12.50€";
            let imgComic = "assets/img/product10.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic = { nombre: nombreComic, precio: precioComic, imagen: imgComic };
            let body = /*BORIS*/JSON.stringify(nuevoComic);

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
                alert("Artículo añadido.");
            });
        })

        // Comic 11
        document.querySelector("#comic1").addEventListener("click", function () {

            console.log("FUNCIONA");
            let nombreComic = "Madonna - Comic";
            let precioComic = "18.90€";
            let imgComic = "assets/img/product11.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic = { nombre: nombreComic, precio: precioComic, imagen: imgComic };
            let body = /*BORIS*/JSON.stringify(nuevoComic);

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
                alert("Artículo añadido.");
            });
        })

        // Comic 12
        document.querySelector("#comic6").addEventListener("click", function () {

            let nombreComic = "Hulk & Sub-Mariner - Comic";
            let precioComic = "16.30€";
            let imgComic = "assets/img/product12.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic = { nombre: nombreComic, precio: precioComic, imagen: imgComic };
            let body = /*BORIS*/JSON.stringify(nuevoComic);

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
                alert("Artículo añadido.");
            });
        })

        // Comic 13
        document.querySelector("#comic2").addEventListener("click", function () {

            let nombreComic = "Harley Rider - Comic Book";
            let precioComic = "12.50€";
            let imgComic = "assets/img/product13.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic = { nombre: nombreComic, precio: precioComic, imagen: imgComic };
            let body = /*BORIS*/JSON.stringify(nuevoComic);

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
                alert("Artículo añadido.");
            });
        })

        // Comic 14
        document.querySelector("#comic3").addEventListener("click", function () {

            let nombreComic = "Sponge Bob Freestyle Funnies 2018 - Comic";
            let precioComic = "14.90€";
            let imgComic = "assets/img/product14.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic = { nombre: nombreComic, precio: precioComic, imagen: imgComic };
            let body = /*BORIS*/JSON.stringify(nuevoComic);

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
                alert("Artículo añadido.");
            });
        })

        // Comic 15
        document.querySelector("#comic7").addEventListener("click", function () {

            let nombreComic = "Wolverine Marvel Limited Series - Comic";
            let precioComic = "18.90€";
            let imgComic = "assets/img/product15.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic = { nombre: nombreComic, precio: precioComic, imagen: imgComic };
            let body = /*BORIS*/JSON.stringify(nuevoComic);

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
                alert("Artículo añadido.");
            });
        })



    });

fetch('/cartas')
    .then(function (response) {
        return response.json()
    }).then(function (res) {

        let printProducts = document.querySelector(".product__container2");

        for (i = 0; i < res.length; i++) {

            printProducts.innerHTML += `<article class="product__card">

        <img src="${res[i].imagen}" alt="" class="product__img">
        
        <h3 class="product__title">${res[i].nombre}</h3>
        <span class="product__price">${res[i].precio}</span>

        <button id="carta${[i + 1]}" class="button--flex product__button">
            <i class="ri-shopping-bag-line"></i>
        </button>
        </article>`
        }
        // Playing Cards 4
        document.querySelector("#carta1").addEventListener("click", function () {

            let nombreComic = "Joker - Playing Cards";
            let precioComic = "17.99€";
            let imgComic = "assets/img/product4.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic = { nombre: nombreComic, precio: precioComic, imagen: imgComic };
            let body = /*BORIS*/JSON.stringify(nuevoComic);

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
                alert("Artículo añadido.");
            });
        })

        // Playing Cards 5
        document.querySelector("#carta2").addEventListener("click", function () {

            let nombreComic = "League of Legends - Playing Cards";
            let precioComic = "11.99€";
            let imgComic = "assets/img/product5.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic = { nombre: nombreComic, precio: precioComic, imagen: imgComic };
            let body = /*BORIS*/JSON.stringify(nuevoComic);

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
                alert("Artículo añadido.");
            });
        })

        // Playing Cards 6
        document.querySelector("#carta3").addEventListener("click", function () {

            let nombreComic = "Iron Man - Playing Cards";
            let precioComic = "18.90€";
            let imgComic = "assets/img/product6.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic = { nombre: nombreComic, precio: precioComic, imagen: imgComic };
            let body = /*BORIS*/JSON.stringify(nuevoComic);

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
                alert("Artículo añadido.");
            });
        })


        // Playing Cards 8
        document.querySelector("#carta4").addEventListener("click", function () {

            let nombreComic = "Classic Incredible Hulk - Playing Cards";
            let precioComic = "19€";
            let imgComic = "assets/img/product8.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic = { nombre: nombreComic, precio: precioComic, imagen: imgComic };
            let body = /*BORIS*/JSON.stringify(nuevoComic);

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
                alert("Artículo añadido.");
            });
        })

        // Playing Cards 9
        document.querySelector("#carta5").addEventListener("click", function () {

            let nombreComic = "Yu Gi Oh - Playing Cards";
            let precioComic = "12.90€";
            let imgComic = "assets/img/product9.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevoComic = { nombre: nombreComic, precio: precioComic, imagen: imgComic };
            let body = /*BORIS*/JSON.stringify(nuevoComic);

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
                alert("Artículo añadido.");
            });
        })
    });

fetch('/juegos')
    .then(function (response1) {
        return response1.json()
    }).then(function (res2) {
        let printProducts = document.querySelector(".product__container3");

        for (i = 0; i < res2.length; i++) {

            printProducts.innerHTML += `<article class="product__card">

        <img src="${res2[i].imagen}" alt="" class="product__img">
        
        <h3 class="product__title">${res2[i].nombre}</h3>
        <span class="product__price">${res2[i].precio}</span>

        <button id="juego${[i + 1]}" class="button--flex product__button">
            <i class="ri-shopping-bag-line"></i>
        </button>
        </article>`
        }
        // Board Game 1
        document.querySelector("#juego3").addEventListener("click", function () {


            let nombre = "Game of thrones Second Edition - Board Game";
            let precio = "33.99€";
            let img = "assets/img/product1.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevo = { nombre: nombre, precio: precio, imagen: img };
            let body = /*BORIS*/JSON.stringify(nuevo);

            fetch('/ventas', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: body
            }).then(function (response1) {
                return response1.json()
            }).then(function (res) {
                alert("Artículo añadido.");
                console.log(res)

            });
        })

        // Board Game 2
        document.querySelector("#juego1").addEventListener("click", function () {

            let nombre = "Funko Verse - Board Game";
            let precio = "25.99€";
            let img = "assets/img/product2.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
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
                alert("Artículo añadido.");
            });
        })

        // Board Game 3
        document.querySelector("#juego2").addEventListener("click", function () {

            let nombre = "X-MEN: Mutant Insurrection - Board Game";
            let precioItem = "52.20€";
            let img = "assets/img/product3.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevo = { nombre: nombre, precio: precioItem, imagen: img };
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
                alert("Artículo añadido.");
            });
        })
    });

fetch('/snacks')
    .then(function (response) {
        return response.json()
    }).then(function (res) {
        let printProducts = document.querySelector(".product__container4");

        for (i = 0; i < res.length; i++) {

            printProducts.innerHTML += `<article class="product__card">

        <img src="${res[i].imagen}" alt="" class="product__img">
        
        <h3 class="product__title">${res[i].nombre}</h3>
        <span class="product__price">${res[i].precio}</span>

        <button id="snack${[i + 1]}" class="button--flex product__button">
            <i class="ri-shopping-bag-line"></i>
        </button>
        </article>`
        }
        // Snack 16
        document.querySelector("#snack1").addEventListener("click", function () {
            let nombre = "Non Veg Snacks - Snack";
            let precio = "2.80€";
            let img = "assets/img/product16.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevo = { nombre: nombre, precio: precio, imagen: img };
            let body = JSON.stringify(nuevo);

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
                alert("Artículo añadido.");
            });
        })

        // Snack 17
        document.querySelector("#snack2").addEventListener("click", function () {

            let nombre = "Snack Pack Banana Cream Pie Pudding - Snack";
            let precio = "3.90€";
            let img = "assets/img/product17.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevo = { nombre: nombre, precio: precio, imagen: img };
            let body = JSON.stringify(nuevo);

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
                alert("Artículo añadido.");
            });
        })

        // Snack 18
        document.querySelector("#snack3").addEventListener("click", function () {

            let nombre = "Berries & Cherries Fruit Snacks - Snack";
            let precio = "1.90€";
            let img = "assets/img/product18.png";
            //let imgComic = document.querySelector(".product__img_1[name='src']").value;
            let nuevo = { nombre: nombre, precio: precio, imagen: img };
            let body = JSON.stringify(nuevo);

            fetch('/ventas', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: body
            }).then(function (response) {
                return response.json()
            }).then(function (res2) {
                console.log(res2)
                alert("Artículo añadido.");
            });
        })


    });

fetch(`/clientes`)
    .then(function (response) {
        return response.json();
    })
    .then(function (res) {
        if (res.nombre == undefined) {

        } else {
            document.querySelector(".divLogin").innerHTML = `<p>Bienvenido, ${res.nombre}</p><br>`;
        }
    })


