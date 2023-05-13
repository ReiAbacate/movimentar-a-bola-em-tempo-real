var ball;
var db;
var pos;

function setup() {
db = firebase.database();
console.log(db);

createCanvas (500, 500);

ball = createSprite(100, 100, 20, 20);
ball.shapeColor = "orangered";

var ballposition = db.ref("ball/position");
ballposition.on("value", lerposicao, showerror);
}

function draw() {
background("lightblue");

if (pos !== undefined){

if (keyDown(UP_ARROW)) {

    changePosition(0, -5);
}

if (keyDown(DOWN_ARROW)) {

    changePosition(0, 5);
}

if (keyDown(RIGHT_ARROW)) {

    changePosition(5, 0);
}

if (keyDown(LEFT_ARROW)) {

    changePosition(-5, 0);
}
  }
drawSprites();
}

function changePosition(x1, y1) {

    db.ref("ball/position").set({
       'x': pos.x+x1,
       'y': pos.y+y1
    })
}

function lerposicao(data) {

    console.log(data.val());
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;
}

function showerror() {

    console.log("dados não recebidos do banco de dados");
}