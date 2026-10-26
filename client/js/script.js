const randomWYRQuestionURL = '/wyr'

const questionText = document.querySelector('#question')
const answer1Label = document.querySelector('#answer1')
const answer2Label = document.querySelector('#answer2')

fetch(randomWYRQuestionURL)
    .then( resp => resp.json() )
    .then( wyrData => {
        console.log(wyrData)
        questionText.innerHTML = wyrData.question 
        answer1Label.innerHTML = wyrData.answer1 
        answer2Label.innerHTML = wyrData.answer2
    } )
    .catch( err => {
        console.error(err)
        alert('Sorry, no WRY questions today')
    })

