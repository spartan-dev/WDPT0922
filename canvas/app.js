console.log("supercanvas")

const canvas = document.getElementById('canvas');
// hace referencia al context (contexto)
const ctx = canvas.getContext('2d');

// ****************************
// draw rectangle:
// ****************************
//iniciamos el camino del dibujo
ctx.beginPath();
ctx.moveTo(50, 50);

ctx.lineTo(250, 50);
ctx.stroke();
ctx.moveTo(250, 50);
// draw the line that has final coordinates x=250, y=100
ctx.lineTo(250, 100);
// .stroke() executes the drawing
ctx.stroke();

// close the path
ctx.closePath();
//dibujar un circulo claro que siiii

ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(150, 170, 75, 0, Math.PI * 2);
ctx.lineWidth = 20;
ctx.strokeStyle = 'green'; // !
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 170, 35, 0, Math.PI * 2);
ctx.fillStyle = 'red'; // !
// fills the inner circle with red color
ctx.fill();
ctx.closePath();


//segunda parte textos colores y bombones :uff:
//cuadros
const canvas2 = document.getElementById('section2')
const ctx2 = canvas2.getContext('2d')
ctx2.fillStyle = "yellow";
ctx2.fillRect(75, 75, 75, 75);
ctx2.globalAlpha = 0.4;
ctx2.fillStyle = "blue";
ctx2.fillRect(50, 50, 50, 50);


ctx2.fillStyle = "orange";
ctx2.fillRect(50, 125, 50, 50);


// Set the transparency
ctx2.globalAlpha = 0.8;

ctx2.fillStyle = "green";
ctx2.fillRect(125, 50, 50, 50);

ctx2.fillStyle = "purple";
ctx2.fillRect(125, 125, 50, 50);

ctx2.font = '48px serif';
ctx2.fillText('Hello world', 10, 50);
ctx2.font = '48px serif';
ctx2.strokeText('Hello world', 10, 100);

const img = new Image(); // Create new <img> element
img.src = 'https://images.unsplash.com/photo-1571790983670-676099a58f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'; // Set source path
