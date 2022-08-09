function Producto (nombre, precio, stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
}
const ProductoA = new Producto ("Samsung Galaxy A-30",49999,10)
const ProductoB = new Producto ("Samsung Galaxy B-52",79999,15)
const ProductoC = new Producto ("Samsung Galaxy C-72",99999,8)
const ProductoD = new Producto ("Renault Clio",799999,577)
const ProductoE = new Producto ("Fiat Punto",899999,220)
const ProductoF = new Producto ("Ford Fiesta",999999,317)
let listaProductodos = [ProductoD, ProductoE, ProductoF]
let InfoProductodos = []
function listasProductodos(){
    for (const producto of listaProductodos){
        InfoProductodos.push (producto.nombre)
        InfoProductodos.push (producto.precio)
        InfoProductodos.push (producto.stock)
    }
}
let listaProducto= [ProductoA, ProductoB, ProductoC]
let InfoProducto = []
function listasProducto(){
    for (const producto of listaProducto){
        InfoProducto.push (producto.nombre)
        InfoProducto.push (producto.precio)
        InfoProducto.push (producto.stock)
    }
}
let addButton=document.getElementById("add-button")
addButton.addEventListener("click", separeteCategories)
function separeteCategories(){
    let itemnumber=entryEdad.value
    divideCategories(itemnumber)
}
let entryEdad=document.getElementById("todo-adder")
function divideCategories(itemnumber){
    if (itemnumber<25){
    for (const producto of listaProducto){
        let card=document.createElement("div")
        card.innerHTML=
                        `<h2> Modelo: ${producto.nombre}</h2>
                        <p>  Precio:$ ${producto.precio}</p>
                        <p> Unidades restantes: ${producto.stock}</p>`
                        document.body.appendChild(card)
    }
} else if(itemnumber<45){
    for (const producto of listaProductodos){
        let card=document.createElement("div")
        card.innerHTML=
                        `<h2> Modelo: ${producto.nombre}</h2>
                        <p>  Precio:$ ${producto.precio}</p>
                        <p> Unidades restantes: ${producto.stock}</p>`
                        document.body.appendChild(card)

}
}
}