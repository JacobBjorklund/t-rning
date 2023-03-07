let div = document.querySelector('div')

const diceSides = [
    "img/dobbelsteen 1_0.png",
    "img/dobbelsteen 2_0.png",
    "img/dobbelsteen 3_0.png",
    "img/dobbelsteen 4_0.png",
    "img/dobbelsteen 5_0.png",
    "img/dobbelsteen 6_0.png",
]

document.querySelector('button').addEventListener('click', () => {
    const randomDice = Math.floor(Math.random() * diceSides.length)
    const randomImage = diceSides[randomDice]

    const images = document.querySelector('#jesus')
    images.src = randomImage
})

