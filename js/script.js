//Choose a random color
const button = document.querySelector('button')
const container = document.querySelector('.container')
const colors = ['#6E4CF6', '#424CD4', '#5487EB', '#4299D4', '#4CDEF6']

container.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
container.style.backgroundColor = colors[colorIndex]

const stringOfHex = colors[colorIndex]

const addHex = document.querySelector('#hex')
addHex.innerHTML = `Hex color: ${stringOfHex}`

}




