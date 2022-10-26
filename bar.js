const till = gsap.timeline({
    pause: 'true'
})
till.to('#percent , #bar', {
    duration: 2,
    opacity: 1,
})

// till.to('#preloader', {
//     duration: 8,
//     width: '0%',
//     delay: 3
// })
till.from('.container', {
    duration: 1.5,
    y: '-150%',
    delay: 3
}, '-=.2')
till.to('.container h1', {
    skewY: 10,
    y:'10%',
    stagger: {
        amount: .4
    }
})

let width = 1;
let bar = document.getElementById('barconfirm')
let id = 1;
// console.log(id);

function move() {
    id = setInterval(frame, 50)
}

function frame() {
    if(width > 100 -1 ) {
        clearInterval(id)
        till.play()
    } 
    else {
        width++;
        bar.style.width = width + '%'
        const per = document.getElementById('percent')
        per.innerHTML = width + '% '
    }
};

window.onload = function(){
    move()
}