// constant for menu.js
const hide = document.getElementsByClassName('end-round')[0]

// Team 1 consts
const redThrees1 = document.getElementsByClassName('red-threes-1')
const blacks1 = document.getElementById('black1')
const reds1 = document.getElementById('red1')
const others1 = document.getElementById('other1')
const calculator1 = document.getElementById('points-calculator-1')
const points1 = document.getElementById('points1')

// Team 2 consts
const redThrees2 = document.getElementsByClassName('red-threes-2')
const blacks2 = document.getElementById('black2')
const reds2 = document.getElementById('red2')
const others2 = document.getElementById('other2')
const calculator2 = document.getElementById('points-calculator-2')
const points2 = document.getElementById('points2')

function setPoints(threes, blacks, reds, others, result) {
    let points = 0;

    for (let i = 0; i < threes.length; i++) {
        if (threes[i].checked) {
            points += 100
        }
    }
    if (points === 400) points *= 2
    if (blacks.value) points += parseInt(blacks.value) * 100
    if (reds.value) points += parseInt(reds.value) * 300
    if (others.value) points += parseInt(others.value)

    result.innerHTML = points.toString()
}

calculator1.addEventListener('click', function () {
    setPoints(redThrees1, blacks1, reds1, others1, points1)
})

calculator2.addEventListener('click', function () {
    setPoints(redThrees2, blacks2, reds2, others2, points2)
})