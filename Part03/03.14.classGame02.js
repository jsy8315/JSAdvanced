// 03.14.class로 만들어보는 간단한 2D 게임 2 (collision detection)
// 게임만들때 할 줄 알아야하는 것
// 1. 화면에 네모, 원 그리기
// 2. 애니메이션을 위해 프레임마다 코드 실행 가능해야
// 3. collision check 할 수 있어야

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 등장 캐릭터의 속성부터 object 자료에 정리해두면 편리
let dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img02, this.x, this.y);
    }
}

let img01 = new Image();
img01.src = 'cactus.png';
let img02 = new Image();
img02.src = 'dinosaur.png';

dino.draw();

// 장애물도 만들어보자 -> 장애물들은 width, height 이런게 각각 다를수도 
// -> 비슷한 Object가 많이 필요할듯 -> class 로 만들어보자

class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img01, this.x, this.y);
    }
}

// 애니메이션을 만들려면
// 1초에 60번 x++하면 서서히 움직임

let timer = 0;
let cactuses = [];
let 점프중 = false;
let 점프timer = 0;
let animation;

function 프레임마다실행할거임(){ // 1초에 60번 코드 실행해야지~
    animation = requestAnimationFrame(프레임마다실행할거임);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 240 === 0){
        let cactus01 = new Cactus();
        cactuses.push(cactus01);
    }

    cactuses.forEach(function(a, i, o){
        // x좌표가 0미만이면 제거
        if (a.x < 0) {
            o.splice(i, 1)
        }

        충돌진짜하나(dino, a);

        a.x--;
        a.draw();
    })

    if (점프중 == true){
        dino.y--;
        점프timer++;
    }

    if(점프timer > 100){
        점프중 = false;
        점프timer = 0;
    }

    if(점프중 == false){
        if (dino.y < 200){
            dino.y++;
        }
    }


    
    dino.draw();
}

// 충돌확인
function 충돌진짜하나(dino, cactus){
    let x축차이 = cactus.x - (dino.x + dino.width);
    let y축차이 = cactus.y - (dino.y + dino.height);
    if (x축차이 < 0 && y축차이 < 0){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}


프레임마다실행할거임();


document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        점프중 = true;
    }
})