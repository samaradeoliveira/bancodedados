//variáveis!!

//bola
var hypnoticBall;
// bancoDeDados
var database;
//var para guardar as posições(x,y) lidas do banco 
var positions;


function setup() {
  //Iniciando o banco de dados
  database = firebase.database();

  //criando o canvas
  createCanvas(500, 500);

  //sprite da bola e cor
  hypnoticBall = createSprite(250, 250, 30, 30);
  hypnoticBall.shapeColor = "white";

  //criando uma var para ir até o banco
  //usando .ref para se referir a localização do valor no banco (referência)
  var hypnoticBallPosition = database.ref('ball/position');
  //cria um ouvinte que continua acompanhando as mudanças desse valor(observa)
  //e chama alguma função(readPosition ou showError)(depende)
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw() {
  //fundo
  background("black");

  //if principal que engloba os outros, para só rodar quando o valor inicial não for indefinido
  if (positions !== undefined) {
    //if e else ifs que verifica o pressionamento de tecla para escrever novas posições 
    //para a bola no banco de dados 
    if (keyDown(LEFT_ARROW)) {
      writePosition(-1, 0);
    }
    else if (keyDown(RIGHT_ARROW)) {
      writePosition(1, 0);
    }
    else if (keyDown(UP_ARROW)) {
      writePosition(0, -1);
    }
    else if (keyDown(DOWN_ARROW)) {
      writePosition(0, 1);
    }
    //desenha os sprites, no caso a bola
    drawSprites();
  }
  //fechar o if principal aqui, linha 54
}

//configurar e ativar função para novas posições da bola no banco de dados 
//writePosition
function writePosition(x, y) {





}






//função para ler valores de posições no banco de dados 
//armazena em data 
function readPosition(data) {
  //guarda os valores em positions, que está no nosso código 
  positions = data.val();

  //separa esses valores (x, y)
  hypnoticBall.x = positions.x;
  hypnoticBall.y = positions.y;
}

//função que será chamada caso haja um erro na leitura de dados do banco
function showError() {
  console.log("Dados não recebidos do Banco de Dados");
}
