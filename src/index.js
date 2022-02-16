const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const container = document.querySelector("#dog-image-container")
const ulContainer = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")
let breedsArray = []

ulContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)

function getImages(){
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(images => {
            const imgs = images.message
            let imgsArray = createImgElement(imgs)
            renderImgs(imgsArray)
        })
}

function createImgElement(imgs){
    return imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
    })
}   
    
function renderImgs(imgsArray){
    imgsArray.forEach(element => {
        renderImg(element)
    });
}

function renderImg(element){
    ulContainer.innerHTML += element
}

function getBreed(){
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(breeds => {
            breedsArray = Object.keys(breeds.message)
            const breedsLis = createLiElement(breedsArray)
            renderLis(breedsLis)
        })
}

function createLiElement(breedsArray){
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
    })
}

function renderLis(breedsLis){
    breedsLis.forEach(element => {
        renderElement(element)
    })
}

function handleClick(event){
    event.target.style.color = 'red'
}

function handleChange(event){
    const letter = event.target.value
    const filterBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredBreedsLis = createLiElement(filterBreeds)
    ulContainer.innerHTML = ''
    renderLis(filteredBreedsLis)
}

getImages()
getBreed() 





/*
fetch(imgUrl)
    .then(response => response.json())
    .then(json => appendImg(json));

fetch(breedUrl)
    .then(response => response.json())
    .then(json => appendBreed(json.message));

    function appendImg(images) {
        const loc = document.getElementById('dog-image-container')
        images.message.forEach(Image => {
            const img = document.createElement('img');
            img.src = Image;
            loc.appendChild(img)
        })
    }
    function appendBreed(breeds) {
        const breedLoc = document.getElementById('dog-breeds')
        const breedObj = Object.keys(breeds)
        const li = document.createElement('li');
        li.setAttribute("id", "breed-li")
        li.innerText = breedObj;
        breedLoc.appendChild(li)
        li.addEventListener("click", function(e) {
            if (e.target && e.target.matches("li")) {
                e.target.style = "color:red;"
            }
        })
        }
*/