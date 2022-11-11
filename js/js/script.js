const bina = document.querySelector('.bina');
const pipe = document.querySelector('.pipe');

const jump = () => {
    bina.classList.add('jump');

    setTimeout(()=> {
        bina.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const binaPosition = +window.getComputedStyle(bina).bottom.replace('px', '');
    
    if (pipePosition < 85 && pipePosition > 0 && binaPosition < 90) {
        
        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        bina.style.animation = 'none';
        bina.style.left = '${binaPosition}px';

        bina.src = '../images/SAB02.png';
        bina.style.width = '75px'
        bina.style.marginLeft = '25px'
        bina.style.bottom = '-15px'

        clearInterval (loop);
    }
    
}, 10);

document.addEventListener('keydown',jump);