
// const dogBarDivElement = document.querySelector('div#dog-bar')
// const dogInfoDivElement = document.querySelector('div#dog-info')

// function init(){
//     fetch('http://127.0.0.1:3000/pups')
//     .then(resp => resp.json())
//     .then(dogList => {
    
//         dogList.forEach(dog => {     //for Each dog, create span element, set it's textcontent as each dog's name.. append span to div #dog-bar
//              displayDogNameInBar(dog)   
//         })
//     })
// }

// //global scope 
// function displayDogNameInBar(dog){

//         const nameSpanElement = document.createElement('span')
//             nameSpanElement.textContent = dog.name
//             dogBarDivElement.appendChild(nameSpanElement)
//     //create img, name, isGoodDog element, set it's textconcent, src to dog's data info. append to dog info div
//         nameSpanElement.addEventListener('click', () => {
//         displayDetail(dog)
//         })

// }
// //when button clicked, good to bad or bad to good

// function displayDetail(dog){
//     dogInfoDivElement.innerHTML = ' '
//     const imgElement = document.createElement('img')
//     const nameElement = document.createElement('h2')
//     const isGoodDogElement = document.createElement('button')
//     // isGoodDogElement.id = 'good-dog'
//     imgElement.src = dog.image
//     nameElement.textContent = dog.name
//     isGoodDogElement.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
//     dogInfoDivElement.append(imgElement, nameElement, isGoodDogElement)

    
//     isGoodDogElement.addEventListener("click", () => {
//         dog.isGoodDog = !dog.isGoodDog

//         let updatingData = { isGoodDog: dog.isGoodDog }

//         patchDog( dog.id , updatingData )
//             .then(updatedDog => {
//                 isGoodDogElement.textContent = updatedDog.isGoodDog? "Good Dog!": "Bad Dog!";
//             }) 
//     })
// }

// init()




// function patchDog( urlId, updatingData){
//     return fetch(`http://localhost:3000/pups/${urlId}`, {
//         method: "PATCH",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(updatingData)
//     })
//     .then(response => response.json())
// }


















// fetch('http://127.0.0.1:3000/pups')
// .then(resp => resp.json())
// .then(dogData => {

//     dogData.map(dog => {
//         const dogBarDiv = document.getElementById('dog-bar')
//         const nameSpanElement = document.createElement('span')
//         nameSpanElement.textContent = dog.name
//         dogBarDiv.appendChild(nameSpanElement)


//         nameSpanElement.addEventListener('click', e => {
//             const dogInfoDiv = document.getElementById('dog-info')
//             dogInfoDiv.innerHTML = ' '
//             const detailImg = document.createElement('img')
//             const detailName = document.createElement('h2')
//             const detailButton = document.createElement('button')
//             detailImg.src = dog.image
//             detailName.textContent = dog.name
//             detailButton.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
//             dogInfoDiv.append(detailImg, detailName, detailButton)


//             detailButton.addEventListener('click', e => {
//                 dog.isGoodDog = !dog.isGoodDog
//                 detailButton.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
//             })
//         })
    
//     })
//     const filterGoodButton = document.getElementById('good-dog-filter')
//     filterGoodButton.addEventListener('click', e => {
//         const optionA = 'Filter good dogs: OFF'
//         const optionB = 'Filter good dogs: On'
//         if(filterGoodButton.textContent === optionA){
//             filterGoodButton.textContent = optionB
//         }else{
//             filterGoodButton.textContent = optionA
//         }

        
//     })
// })






















































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
