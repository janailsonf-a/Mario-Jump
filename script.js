const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOverBtn = document.getElementById("gameOverBtn");
const musicaFundo = document.getElementById('musicaFundo');

const jump = () =>{
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if(pipePosition <= 125 && pipePosition > 0 && marioPosition < 110){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

       
        gameOverBtn.style.display = 'block';
        
        clearInterval(loop);
    }
}, 10);


document.addEventListener('keydown', jump);

gameOverBtn.addEventListener("click" ,function(){
    location.reload(); 
});