//declarar variables globles en scope

const img = new Image(); // Create new <img> element
img.src = 'https://images.unsplash.com/photo-1571790983670-676099a58f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'; // Set source path
let imagePositionX = 0
let imagePositionY = 0


//funcion de dibujar
function drawImage(x,y){
    const canvas = document.getElementById('image-canvas')
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, imagePositionX, imagePositionY, canvas.height, canvas.width );
}
//invoccion de la funcion drawImage
drawImage(150,150)