let imagenFondo
let separacion = 150
let tablero = [["*","*","*"],
               ["*","*","*"],
               ["*","*","*"]]
let turno = "X"
let yaHayGanador = false

function preload() {
  // put preload code here
  imagenFondo = loadImage('./images/gatito1.jpg')
}

function setup() {
  // put setup code here
  createCanvas(800,800)
}

function draw() {
  // put drawing code here
  background(255)
  image(imagenFondo,0,0,800,800)
  //rect(100,100,200,200)
  stroke(0,0,255)
  line(separacion,0,separacion,separacion*3)
  line(separacion*2,0,separacion*2,separacion*3)
  line(0,separacion,separacion*3,separacion)
  line(0,separacion*2,separacion*3,separacion*2)
  dibujaTablero()
  if(yaHayGanador){
    noLoop()
    fill(0,255,0)
    textAlign(CENTER,CENTER)
    textSize(32)
    text("🏆🏆🧸👏 Ganador 🐓: " + turno, 
    width/2, height/2+150)
  //dibujaX(1,1)
  //dibujaO(2,2)
  }
}

function dibujaX(x,y) {
  let x1 = x * separacion
  let y1 = y * separacion
  let x2 = x1 + separacion
  let y2 = y1 + separacion
  stroke(0,225,0)
  line(x1,y1,x2,y2)
  line(x2,y1,x1,y2)   
}
function dibujaO(x,y) {
  let x1 = x * separacion
  let y1 = y * separacion
  let x2 = x1 + separacion
  let y2 = y1 + separacion
  stroke(255,0,0) 
  noFill()
  circle((x1+x2)/2,(y1+y2)/2,separacion)
}

function dibujaTablero(){
  strokeWeight(3)
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){ 
      if(tablero[j][i] == "X"){  //invertimos j e i
        dibujaX(i,j)
      }else if(tablero[j][i] == "O"){
        dibujaO(i,j)
      }
    }
  }
}

function mouseClicked(){
  let x = Math.floor(mouseX/separacion)
  let y = Math.floor(mouseY/separacion)
  if(tablero[y][x] == "*"){
    tablero[y][x] = turno
    
    if(verificaGanador(x,y)){
      yaHayGanador = true
    }
    else {
      if(turno == "X"){
        turno = "O"
      }else{
        turno = "X"
      }
    }
  }
  //console.log(tablero)
}


function touchStarted(){
  let x = Math.floor(mouseX/separacion)
  let y = Math.floor(mouseY/separacion)
  if(tablero[y][x] == "*"){
    tablero[y][x] = turno
    
    if(verificaGanador(x,y)){
      yaHayGanador = true
    }
    else {
      if(turno == "X"){
        turno = "O"
      }else{
        turno = "X"
      }
    }
  }
  //console.log(tablero)
}

function verificaGanador(x,y) {
  let gano = false
  if(tablero[y][0] == tablero[y][1] 
    && tablero[y][1] == tablero[y][2]){
    gano = true
  }
  if(tablero[0][x] == tablero[1][x] 
    && tablero[1][x] == tablero[2][x]){
    gano = true
  }
  if(tablero[0][0] == tablero[1][1] 
    && tablero[1][1] == tablero[2][2] 
    && tablero[0][0] != "*" ){
    gano = true
  }
  if(tablero[0][2] == tablero[1][1] 
    && tablero[1][1] == tablero[2][0] 
    && tablero[0][2] != "*"){
    gano = true
  }
  return gano
}