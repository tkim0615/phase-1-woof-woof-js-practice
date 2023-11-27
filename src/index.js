
fetch('http://127.0.0.1:3000/pups')
.then(resp => resp.json())
.then(dogData => {

    dogData.map(dog => {
        const dogBarDiv = document.getElementById('dog-bar')
        const nameSpanElement = document.createElement('span')
        nameSpanElement.textContent = dog.name
        dogBarDiv.appendChild(nameSpanElement)


        nameSpanElement.addEventListener('click', e => {
            const dogInfoDiv = document.getElementById('dog-info')
            dogInfoDiv.innerHTML = ' '
            const detailImg = document.createElement('img')
            const detailName = document.createElement('h2')
            const detailButton = document.createElement('button')
            detailImg.src = dog.image
            detailName.textContent = dog.name
            detailButton.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
            dogInfoDiv.append(detailImg, detailName, detailButton)


            detailButton.addEventListener('click', e => {
                dog.isGoodDog = !dog.isGoodDog
                detailButton.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
            })

        })
        
      
    })
})






















































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
