//Creamos el objeto
const product = {
    name: "GTA VI",
    price: 100,
    stock: 10,
}

//Mostramos las tres propiedades iniciales
console.log(product.name)
console.log(product.price)
console.log(product.stock)


//Añadimos category
product.category = "Acción"

//Modificación del stock
product.stock = 2

//Eliminar catergory
delete product.category


//Comprobación de si existe stock
if ("stock" in product) {
    console.log(product.stock)
}