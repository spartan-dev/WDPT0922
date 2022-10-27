//declaracion de variables globales
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let frames = 0;
let requestID;
const buttonStart =  document.getElementById('start-button')

class Background {
    //la masa inicial de nuestro pastel
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width= canvas.width;
        this.height= canvas.height;
        this.image = new Image();
        this.image.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f137efa8-8b54-461c-aa90-a01efa1b7241/d8jq7ea-237407c6-13b0-4aed-a22e-f712e5d6f0ba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mMTM3ZWZhOC04YjU0LTQ2MWMtYWE5MC1hMDFlZmExYjcyNDEvZDhqcTdlYS0yMzc0MDdjNi0xM2IwLTRhZWQtYTIyZS1mNzEyZTVkNmYwYmEucG5nIn1dXX0.n-MehR4m7t6d6gM9_nNQIAWct01-HoZCX9cRIiVHGno"
    }
    //metodos
    draw(){
        this.x --;
        if(this.x < -canvas.width) this.x = 0
        //dibujar la imagen en fijo
        ctx.drawImage(this.image,this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
    }
}
class Mario {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image1 = new Image()
        this.image1.src = "https://bit.ly/2L7yH3f";
        this.image2 = new Image()
        this.image2.src = "https://art.pixilart.com/33b1bbc23398be7.png"
        this.image = this.image1
    }

    //metodos
    draw(){
        if(frames % 10 === 0){
            this.image = this.image === this.image1 ? this.image2 : this.image1
        }

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}
const mario = new Mario(70,270,70,70)
const fondo = new Background()

function update(){
    //el aumento de los frames al trabajar con la recursividad
    //(llamar a una funcion dentro de ella misma)
    frames++
    //limpieza del canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)
    fondo.draw()
    mario.draw()
   console.log("hell yeah")
  //esto es el loop de toda la app
    if(requestID){
       requestID = requestAnimationFrame(update)
    }
}

function start(){
    console.log("start el game")
    requestID = requestAnimationFrame(update)
    buttonStart.setAttribute('disabled','')
}
function endGame(){
    console.log("stop el game")
    requestID = undefined;
    buttonStart.removeAttribute('disabled','')
}

start()
update()

//agregar los escuchadores

addEventListener('keydown', (event)=> {
    if(event.keyCode === 32){
        //mario ejecuta algo
        mario.y -= 60;
    }
    if(event.keyCode === 65){
          mario.x += 20
    }
    if(event.keyCode === 83){
        mario.x -= 20
    }
})

