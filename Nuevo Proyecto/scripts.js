function Producto (nombre, precio, stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
}
const ProductoA = new Producto ("Samsung Galaxy A-30",40000,10)
const ProductoB = new Producto ("Samsung Galaxy B-52",50000,15)
const ProductoC = new Producto ("Samsung Galaxy C-72",70000,8)
let listaProducto= [ProductoA, ProductoB, ProductoC]
let InfoProducto = []
function listasProducto (){
    for (const producto of listaProducto){
        InfoProducto.push (producto.nombre)
        InfoProducto.push (producto.precio)
        InfoProducto.push (producto.stock)
    }
}    
listasProducto()
let addButton=document.getElementById("add-button")
addButton.addEventListener("click", separeteCategories)
function separeteCategories(){
    let itemnumber=entryEdad.value
    divideCategories(itemnumber)
}
let entryEdad=document.getElementById("todo-entry-box")
function divideCategories(number){
    if (itemnumber<25){
        for (const producto of listaProducto){
        let card=document.createElement("div")
        card.innerHTML=
                        `<h2> Modelo: ${producto.nombre}</h2>
                        <p>  Precio:$ ${producto.precio}</p>
                        <p> Unidades restantes: ${producto.stock}</p>`
                        document.body.appendChild(card)
    }
}
}