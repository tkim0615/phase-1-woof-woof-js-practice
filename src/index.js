let url = 'http://127.0.0.1:5111/pups'
const dogBarElement = document.getElementById('dog-bar')
const dogDetailInfoDiv = document.getElementById('dog-info')
const dogFilterBtn = document.getElementById('good-dog-filter')
let currentDog
let dogsDataCopy
fetch(url)
    .then(r => r.json())
    .then(dogsData => {
        dogsDataCopy = dogsData
        dogsData.map(dog =>{
            renderDogNameInBar(dog)
        })
    })

//render functions
const renderDogNameInBar = dog =>{
    const dogNameSpanELement = document.createElement('span')
    dogNameSpanELement.textContent = dog.name
    dogBarElement.append(dogNameSpanELement)

    dogNameSpanELement.addEventListener('click', () =>{
        renderDogDetail(dog)
    })
}
//render function 2
const renderDogDetail = (dog) =>{
    currentDog = dog
    dogDetailInfoDiv.innerHTML = ' '
    const detailImg = document.createElement('img')
    detailImg.src = dog.image
    const detailName = document.createElement('h2')
    detailName.textContent = dog.name
    const detailBtn = document.createElement('button')
    detailBtn.textContent = dog.isGoodDog? 'Good Dog!' : 'Bad Dog!'
    dogDetailInfoDiv.append(detailImg, detailName, detailBtn)

    detailBtn.addEventListener('click', () => {
        handleToggle(detailBtn)
    })
}

const handleToggle = (detailBtn) => {
    currentDog.isGoodDog = !currentDog.isGoodDog
    handlePatch(detailBtn)
}

const handlePatch = (detailBtn) =>{
    fetch(`${url}/${currentDog.id}`,{
        method: "PATCH",
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify({isGoodDog: currentDog.isGoodDog})
    })
        .then(resp => resp.json())
        .then(updatedGoodDogStatus => {
            detailBtn.textContent = updatedGoodDogStatus.isGoodDog? 'Good Dog!' : 'Bad Dog!'
        })
}

dogFilterBtn.addEventListener('click', () =>{
    if(dogFilterBtn.textContent.includes("OFF")){
        dogFilterBtn.textContent = "Filter good dogs: ON"
    } else{
        dogFilterBtn.textContent = "Filter good dogs: OFF"
    }


    if(dogFilterBtn.textContent.includes("ON")){
        
        let filtered = dogsDataCopy.filter(dog => {
            return dog.isGoodDog === true
        })
        console.log(filtered)
        dogBarElement.innerHTML = ' '
        filtered.forEach(dog =>{
            renderDogNameInBar(dog)
        })
    } else{
        dogsDataCopy.forEach(dog =>{
            renderDogNameInBar(dog)

        })  
    }

})