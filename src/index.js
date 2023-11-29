const DogBarElement = document.getElementById('dog-bar')
const url = 'http://127.0.0.1:3000/pups'
const dogImageElement = document.createElement('img')
const dogNameElement = document.createElement('h2')
const goodDogButtonElement = document.createElement('button')
const dogInfoElement = document.getElementById('dog-info')
let currentDog

fetch(url)
    .then(res => res.json())
    .then(dogData => {dogData.forEach(dog => {
        renderDog(dog)
        })
    })

function renderDog(dog){
    console.log(dog)
    const dogSpanElement = document.createElement('span')
    dogSpanElement.textContent = dog.name
    DogBarElement.appendChild(dogSpanElement)
    dogSpanElement.addEventListener('click', () => {
        displayDog(dog)
    })}

function displayDog(dog){
    currentDog = dog
    dogImageElement.src = dog.image
    dogNameElement.textContent = dog.name
    goodDogButtonElement.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
    dogInfoElement.append(dogImageElement, dogNameElement, goodDogButtonElement)
    }

goodDogButtonElement.addEventListener('click', (e)=> {
    
    console.log('button clicked')
    currentDog.isGoodDog = !currentDog.isGoodDog
    let updatedData = {isGoodDog: currentDog.isGoodDog}
    console.log(currentDog.id)
    fetch(`http://127.0.0.1:3000/pups/${currentDog.id}`, {
        method: 'PATCH',
        headers : {
            "Content-Type" : "application/json"
                    },
        body: JSON.stringify(updatedData)}
        )
        .then(resp => resp.json())
        .then(updatedData => {
            goodDogButtonElement.textContent = currentDog.isGoodDog ? "Good Dog!" : "Bad Dog!"
            console.log(updatedData)
        })
    } 
    )














































// fetch('http://127.0.0.1:3000/pups')
// .then(resp => resp.json())
// .then(dogList => {
//     dogList.forEach(dog => {
    
//     const pupNameSpanElement = document.createElement('span')
//     const pupNameDivElement = document.getElementById('dog-bar')
//     console.log(pupNameDivElement)

//     pupNameSpanElement.textContent = dog.name
//     pupNameDivElement.appendChild(pupNameSpanElement)

//     //details
//     pupNameSpanElement.addEventListener('click', e => {
//         const pupDetailDiv = document.getElementById('dog-info')
//         const pupDetailImg = document.createElement('img')
//         const pupDetailName = document.createElement('h2')
//         const pupDetailButton = document.createElement('button')
    
//         pupDetailImg.src = dog.image
//         pupDetailName.textContent = dog.name
//         pupDetailButton.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
    
//         pupDetailDiv.append(pupDetailImg, pupDetailName, pupDetailButton)

// //good dog button
// pupDetailButton.addEventListener('click', e => {
//     dog.isGoodDog = !dog.isGoodDog
//     pupDetailButton.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
// })

//     })

    
// })


// })
