
const misProductos = [
        { id: 1, nombre: "Arboles", precio: 50000, img: "/img/arbol.jpg", categoria: 1 },
        { id: 2, nombre: "Luces", precio: 10000, img: "/img/luces.jpg", categoria: 2 },
        { id: 3, nombre: "Adornos", precio: 15000, img: "/img/adornos.jpg", categoria: 3 },
        { id: 4, nombre: "Botas De Navidad", precio: 5000, img: "/img/botas.jpg", categoria: 4 },
      ]

export const getProductos = () => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(misProductos)
        },2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item =>item.id === Number(id));
            resolve(producto);
        },2000);
    })
}