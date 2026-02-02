function setup() {
  createCanvas(400, 400);
}

let olhoX;
let olhoY;

function draw() {
  background("#607D8B"); // Cor de fundo (dourado)
  
  fill("#C2C21C"); // Cor do rosto (laranja)
  circle(200, 200, 300); // rosto
  
  fill("white"); // Cor dos olhos
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
  
  fill("#E4F1E5"); // Cor da boca (vermelho escuro)
  line(150, 270, 250, 235); // boca
  
  fill("#FF5722"); // Cor do nariz (verde floresta)
  triangle(200, 180, 170, 220, 220, 220); // nariz
  
  stroke("#000000"); // Cor das sobrancelhas (preto)
  line(123, 115, 178, 113); // sobrancelha esquerda
  line(225, 116, 279, 106); // sobrancelha direita
  
  // Cores das pupilas
  fill("#000000"); // Cor das pupilas (preto)
  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);
  
  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); // nova pupila direita
  
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}