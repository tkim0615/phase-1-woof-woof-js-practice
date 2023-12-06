
//dom
const dogInfoDiv = document.getElementById("dog-info")
const divElement = document.getElementById('dog-bar')
const filterButton = document.getElementById('good-dog-filter')

let url = 'http://127.0.0.1:2000/pups'
let currentDog
let dogsDataCopy

//fetch
fetch(url) //get fetch
    .then(resp => resp.json())
    .then(dogsData => {
        dogsDataCopy = dogsData
        dogsData.forEach(dog => {
            renderDogNameBar(dog)

        })
    })


//render
function renderDogNameBar(dog){
    currentDog = dog
    const dogNameSpanElement = document.createElement('span')
    dogNameSpanElement.textContent = dog.name
    divElement.append(dogNameSpanElement)

    dogNameSpanElement.addEventListener('click', ()=>{
        currentDog = dog
        dogInfoDiv.innerHTML = ' '
        const imgELement = document.createElement('img')
        const h2ELement = document.createElement('h2')
        const buttonElement = document.createElement('button')
        imgELement.src = dog.image
        h2ELement.textContent = dog.name
        buttonElement.textContent = currentDog.isGoodDog? "Good Dog!" : "Bad Dog!"
        dogInfoDiv.append(imgELement, h2ELement, buttonElement)

        buttonElement.addEventListener('click', (e) =>{
            currentDog.isGoodDog = !currentDog.isGoodDog
            fetch(`${url}/${currentDog.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({isGoodDog: currentDog.isGoodDog})
            })
                .then(resp => {
                    if(resp.ok === true){
                      resp.json().then(updatedStatus => {
                        buttonElement.textContent = updatedStatus.isGoodDog? "Good Dog!" : "Bad Dog!" 
                      })  
                    }
                    else{
                        alert('Unable to update dog status')
                    }
                })
        })
    
    })
}



// toggle switch
//if text content of filter button contains "ON"
//filter so that array contains isgooddog.true

filterButton.addEventListener('click', () => {
    divElement.innerHTML = ' ';
    let textContent = filterButton.textContent;
    if (textContent.includes("OFF")) {
        filterButton.textContent = "Filter good dogs: ON";

        fetch(url)
            .then(resp => resp.json())
            .then(dogsData => dogsData.filter(dog => dog.isGoodDog))
            .then(filteredDogs => {
                filteredDogs.forEach(dog => renderDogNameBar(dog));
    })

        } else {
        filterButton.textContent = 'Filter good dogs: OFF';
        fetch(url) //get fetch
            .then(resp => resp.json())
            .then(dogsData => dogsData.forEach(dog => renderDogNameBar(dog))); 
    }
});
