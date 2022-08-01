const adviceText = document.querySelector('.advice h1');
const dice = document.querySelector('.dice');
const adviceNumber = document.querySelector('.advice-no span');


function revealAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(function(resp) {
        return resp.json();
    })
    .then(function(advice) {
        const data = advice.slip.advice;
        adviceText.innerHTML = data;
        console.log('adviced');
        adviceNo(advice);
    }) 
}

function adviceNo(advice) {
    const no = advice.slip.id;
    adviceNumber.innerHTML = 'ADVICE #' + no;
}

dice.addEventListener('click', revealAdvice);
dice.addEventListener('ontouch', revealAdvice);

document.addEventListener('load', revealAdvice);