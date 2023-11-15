function permitirModoOscuro() {
    let main_body = document.body;
    main_body.classList.toggle("modo-noche")
}

// const productos = [
//     { id: 1, nombre: "Placa de video", precio: 345000 },
//     { id: 2, nombre: "Mouse", precio: 10500 },
//     { id: 3, nombre: "Teclado", precio: 8000 },
//     { id: 4, nombre: "Monitor", precio: 120000 },
// ];
// localStorage.setItem("carrito", JSON.stringify(productos))

let eliminar = document.getElementById("eliminar");
let carrito;

let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
} else {
    carrito = [];
    let div = document.createElement("div");
    div.innerHTML = "Carrito Vacío";
    document.body.append(div);
}

carrito.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

    document.body.append(div);
});

eliminar.addEventListener("click", () => {
    localStorage.clear();
    alert("Carrito eliminado");
    location.reload();
});
