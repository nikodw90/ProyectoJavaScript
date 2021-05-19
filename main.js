

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

document.addEventListener('DOMContentLoaded', () =>{
  fetchData()
})

const fetchData = async () =>{
  try {
    const res = await fetch('./basededatos.json')
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
} 

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

