const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);

const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
];

function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = 'red';
                context.fillRect(x + offset.x,
                    y + offset.y,
                    1, 1);
            }
        })
    })
}

let dropCounter = 0;
let dropInteval = 100;

var lastTime = 0;

function update(time = 0) {
    const deltaTime = Math.round(time / 100) - lastTime;


    lastTime = time;
    dropCounter += -deltaTime;

    // if (dropCounter > dropInteval) {
    //     player.pos.y++;
    //     dropCounter = 0;


    // }

    // setInterval( () => {
    //     console.log('poszlo')
    // },5000)


    draw();
    requestAnimationFrame(update);
}

setInterval( () => {
   player.pos.y ++;
},1000)

document.addEventListener('keydown' ,event =>{
    if(event.keyCode == 37) {
        player.pos.x --;
    }else if(event.keyCode == 39) {
        player.pos.x ++;
    }
    else if(event.keyCode == 40) {
        player.pos.y ++;
    }
})

const player = {
    pos: {
        x: 5,
        y: 5
    },
    matrix: matrix
}

update();