
// =====завдання 1=====

const startBtn = document.querySelector(".js-start5")

startBtn.addEventListener("click", () => {
    let counter = 0
    const timerId = setInterval(() => {
        counter += 1
        console.log(counter)
        if (counter === 5) {
            console.log("stop");
            clearInterval(timerId);
        }}, 1000)})

// =====завдання 2=====

const btnAnimated = document.querySelector(".animate")
const btnStopAnimated = document.querySelector(".stopAnimate")
const elem1 = document.querySelector(".elem1")
const elem2 = document.querySelector(".elem2")
const elem3 = document.querySelector(".elem3")

btnAnimated.addEventListener("click", animateElements)
btnStopAnimated.addEventListener("click", stopAnimated)
let timerId = ""
function stopAnimated() {
    clearInterval(timerId)
}

function animateElements() {
    timerId = setInterval(() => {
        let randomSize1 = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
        elem1.style.height = `${randomSize1}px`
        elem1.style.width = `${randomSize1}px`

        let randomSize2 = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
        elem2.style.height = `${randomSize2}px`
        elem2.style.width = `${randomSize2}px`

        let randomSize3 = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
        elem3.style.height = `${randomSize3}px`
        elem3.style.width = `${randomSize3}px`
    }, 1000)
}

// =====завдання 3=====

const container = document.querySelector("#container")
const scoreDisplay = document.querySelector("#score")
const timerBtn = document.querySelector("#timerBtn")

let score = 0

let gameInterval = ''
timerBtn.addEventListener("click", ()=> {
    gameInterval = setInterval(createTarget, 400)
    score = 0
    setTimeout(() => {
        clearInterval(gameInterval)
        alert("Game Over! Your score is: " + score)
        container.innerHTML = " "
    }, 7000)
})
function createTarget() {
    
    const target = document.createElement('div')
    target.classList.add('target')

    const maxX = container.clientWidth - 50
    const maxY = container.clientHeight - 50

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    target.style.left = `${randomX}px`
    target.style.top = `${randomY}px`
    container.appendChild(target)

    target.addEventListener("click", () => {
        score+=1
        scoreDisplay.textContent = score
        container.removeChild(target)
    })
}

// =====завдання 4=====

const inputSec = document.querySelector("#inputSecond")

inputSec.addEventListener("blur", onInput)

function onInput() {
    let seconds = inputSec.value * 1000
    const timerId = setTimeout(() => {
        alert("Повідомленя на яке ви так довго чекали");
      }, seconds)
}











