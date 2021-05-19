

let carrito = []
let acumuladorDeProdutos = []

let Guardado = localStorage.ProductosAgregados;
console.log(Guardado)
if(Guardado === null){
  alert('no hay productos agregados')
  carrito = []
}else{
  carrito = [Guardado]
}


// const templadeCard = document.getElementsById('templade-cards').content
// const fragmento = document.createDocumentFragment()


document.addEventListener('DOMContentLoaded', () =>{
  fetchData()
})

const fetchData = async () =>{
  try {
    const res = await fetch('https://raw.githubusercontent.com/nikodw90/ProyectoJavaScript/a089ac47064cdc1276def36dde7e66213eb7353d/basededatos.json')
    const data = await res.json()
    // console.log
    pintarCards(data)
  } catch (error) {
    console.log(error)
  }
} 
  const contenedorProductos = document.querySelector('#contenedor-productos')
  const pintarCards = (data) => {


// crear las cards 

  const template = document.querySelector('#templade-productos').content
  const fragmento = document.createDocumentFragment()
  console.log(template)
  data.forEach(producto =>{
    console.log(producto)
    template.querySelector('h3').textContent = producto.Nombre
    template.querySelector('p').textContent = producto.descripcion
    template.querySelector('h4').textContent = producto.precio


    const clone = template.cloneNode(true)
    fragmento.appendChild(clone)
  })
  contenedorProductos.appendChild(fragmento)
}

// Funcion agregar carrito

function agregar(precio) {
    carrito.push(precio);
    localStorage.setItem('ProductosAgregados', JSON.stringify(carrito))
    
    $(".boton").click(function(){ 
      $(".modal").show(200); 
      
    });
    $(".modal .bodymodal button").click(function(){ 
      $(".modal").hide(200); 
    });
    
        
    let ProductoAgregado = function(){
        console.log(precio)
    }
    
    let boton = document.getElementById('.boton');addEventListener('click', ProductoAgregado)
    console.log(`tu cantidad es de ${carrito.length} en tu carrito` + " " + (precio))
    
    
  }
