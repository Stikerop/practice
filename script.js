// let a = 0, b = 1000
//
// let tittle = document.querySelector("#tittle")
// let btnStart = document.querySelector("#btnStart")
// let playBox = document.querySelector("#playBox")
// let btnLess = document.querySelector("#btnLess")
// let btnGreater = document.querySelector("#btnGreater")
//
// btnStart.addEventListener('click', function () {
//     btnStart.style.display = 'none'
//     playBox.style.display = 'block'
//     tittle.innerHTML = parseInt((a+b)/2)
// })
//
// btnLess.addEventListener('click', function () {
//     b = parseInt((a+b)/2)
//     tittle.innerHTML = parseInt((a+b)/2)
// })
//
// btnGreater.addEventListener('click', function () {
//     a = parseInt((a+b)/2)
//     tittle.innerHTML = parseInt((a+b)/2)
// })
//





let a = 0, b = 1000

tittle = document.querySelector('#tittle')
btnStart = document.querySelector('#btnStart')
playBox = document.querySelector('#playBox')
btnLess = document.querySelector('#btnLess')
btnGreater = document.querySelector('#btnGreater')

btnStart.addEventListener('click', function (){
    btnStart.style.display = 'none'
    playBox.style.display = 'block'
    tittle.innerHTML = parseInt((a + b)/2)
})

btnLess.addEventListener('click', function () {
    b = parseInt((a + b)/2)
    tittle.innerHTML = parseInt((a + b)/2)
})

btnGreater.addEventListener('click', function () {
    a = parseInt((a + b)/2)
    tittle.innerHTML = parseInt((a + b)/2)
})







