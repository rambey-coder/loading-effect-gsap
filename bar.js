const till = gsap.timeline({
    pause: 'true'
})
till.to('#percent , #bar', {
    duration: 2,
    opacity:1,
    zIndex: -1
})
till.to('#preloader', {
    duration: 8,
    width: '0%'
})
till.from('.container', {
    duration: 1.5,
    y: '-150%'
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
let id;

function move() {
    id = setInterval(frame, 10)
}

function frame() {
    if(width > 100) {
        clearInterval(id)
        till.play()
    }else {
        width++;
        bar.style.width = width + '%'
        document.getElementById('percent').innerHTML = width + '% '
    }
}