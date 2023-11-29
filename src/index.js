
//1 create span element. set textcontenet to name of dog and append to div dogbar
const dogBarElement = document.getElementById('dog-bar')
const dogInfoElement = document.getElementById('dog-info')
let currentDog
fetch('http://127.0.0.1:4000/pups')
    .then(resp => resp.json())
    .then(dogArray => {
        dogArray.forEach(dog => {
            displayDogNameinBar(dog)
    })
})

function displayDogNameinBar(singleDog){

    const dogSpanElement = document.createElement('span')
    dogSpanElement.textContent = singleDog.name
    dogBarElement.appendChild(dogSpanElement)

    //2 click event on spanelement. create image element, h2, button, set its content and append to dog-info div
    dogSpanElement.addEventListener('click', ()=> {
    currentDog = singleDog

        dogInfoElement.innerHTML = ''
        const imgElement = document.createElement('img')
        const nameELement = document.createElement('h2')
        const buttonElement = document.createElement('button')

        imgElement.src = singleDog.image
        nameELement.textContent = singleDog.name
        buttonElement.textContent = singleDog.isGoodDog? "Good Dog!" : " Bad Dog!"
        dogInfoElement.append(imgElement, nameELement, buttonElement)

        buttonElement.addEventListener('click', ()=> {
            currentDog.isGoodDog = !currentDog.isGoodDog
            
            let updatedGoodDog = {
                isGoodDog: currentDog.isGoodDog
            }
            fetch(`http://127.0.0.1:4000/pups/${currentDog.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(updatedGoodDog)
            })
                .then(resp => resp.json())
                .then(updatedGoodDogData => {
                    console.log(buttonElement.textContent)
                    buttonElement.textContent = updatedGoodDogData.isGoodDog? " Good Dog!" : "Bad Dog!"
                })
        })
    })
}





































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
