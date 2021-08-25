const charactersURL = "https://breakingbadapi.com/api/characters"
const quotesURL = "https://breakingbadapi.com/api/quote/random"

const respToJson = resp => resp.json()

const getQuote = () => {
    fetch(quotesURL)
    .then(respToJson)
    .then(randomQuote => createQuote(randomQuote))
}

const createQuote = randomQuote => {
    const button = document.querySelector("#getRandomQuote")
    const selectQuote = document.querySelector("p#quote")
    const selectAuthor = document.querySelector("p#author")
    button.addEventListener('click', event => {
        getQuote();
        selectQuote.textContent = `"${randomQuote[0].quote}"`
        selectAuthor.textContent = `-${randomQuote[0].author}`
    })
}

const getCharacters = () => {
    fetch(charactersURL)
    .then(respToJson)
    .then(characterArr => { 
        addCharacterOptions(characterArr, nameDropdown1)
        addCharacterOptions(characterArr, nameDropdown2)
        changeNameEvent(characterArr)
    })
}

const nameDropdown = document.querySelectorAll(".names")
const nameDropdown1 = nameDropdown[0]
const nameDropdown2 = nameDropdown[1]

const addCharacterOptions = (characterArr, dropdown) => {
    const removeWalterArray = characterArr.slice(1)
    removeWalterArray.forEach(character => {
        const characterOptions = document.createElement('option')
        characterOptions.textContent = character.name
        dropdown.append(characterOptions);
    })
}

const changeNameEvent = characterArr => {
    nameDropdown1.addEventListener('change', (event) => {
        const inputValue = nameDropdown1.value;
        const inputImage = document.getElementById("CharacterPic1")

        for(i = 0; i < characterArr.length; i++){
            if(characterArr[i].name === inputValue){
                inputImage.src = characterArr[i].img
                displayCharacterDetails(characterArr, name1)
            }
        }
        if (inputValue === "Pick a character") {
            alert("Pick a character")
        }
    })
    nameDropdown2.addEventListener('change', (event) => {
        const inputValue = nameDropdown2.value;
        const inputImage = document.getElementById("CharacterPic3")

        for(i = 0; i < characterArr.length; i++){
            if(characterArr[i].name === inputValue){
                inputImage.src = characterArr[i].img
                displayCharacterDetails(characterArr, name3)
            }
        }
        if (inputValue === "Pick a character") {
            alert("Pick a character")
        }
    })
}

const name1 = document.querySelector("div#Character1 h1")
const name3 = document.querySelector("div#Character3 h1")

const displayCharacterDetails = (characterArr, name) => {
    name.textContent = characterArr[i].name
    
    const ul = name.nextElementSibling
    const occupationLi = ul.querySelector(".Occupation")
    occupationLi.textContent = `Occupation: ${characterArr[i].occupation}`
    
    const birthdayLi = ul.querySelector(".Birthday")
    birthdayLi.textContent = `Birthday: ${characterArr[i].birthday}`

    const actorLi = ul.querySelector(".Actor")
    actorLi.textContent = `Actor Name: ${characterArr[i].portrayed}`

    const seasonsLi = ul.querySelector(".Seasons")
    seasonsLi.textContent = `Season Appearances: ${characterArr[i].appearance}`
}

const walterImg = document.querySelector('img#walterImg')

const formSubmit = () => {
    const form = document.querySelector("form")
    form.addEventListener('submit', event => {
        event.preventDefault()
        
        const yourNameInput = document.querySelector("#WalterWhite h1")
        yourNameInput.textContent = form[0].value

        const occupationLi = document.querySelector("#WalterWhite li")
        occupationLi.textContent = `Occupation: ${form[1].value}`

        const birthdayLi = occupationLi.nextElementSibling
        birthdayLi.textContent = `Birthday: ${form[2].value}`

        const actorLi = birthdayLi.nextElementSibling
        actorLi.textContent = `Favorite Episode: ${form[3].value}`

        walterImg.src = form[4].value;

        const seasonsLi = actorLi.nextElementSibling

        if(!!seasonsLi === true){
            seasonsLi.remove()
        }
        formAlert(form)
    })
}

const formAlert = (form) => {
    if (form[0].value === "") {
        alert("Please fill out Your Name!")
    } else if (form[1].value === "") {
        alert("Please fill out Occupation!")
    } else if (form[2].value === "") {
        alert("Please fill out Birthday!")
    } else if (form[3].value === "") {
        alert("Please fill out Favorite Episode!")
    } else if (form[4].value === "") {
        alert("Please fill out Image!")
    } else (form.reset())
}

const init = () => {
    getQuote();
    getCharacters();
    formSubmit()
}

init()