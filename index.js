const charactersURL = "https://breakingbadapi.com/api/characters"
const quotesURL = "https://breakingbadapi.com/api/quote/random"

function getQuote() {
    fetch(quotesURL)
    .then(response => response.json())
    .then(randomQuote => createQuote(randomQuote))
}

function createQuote(randomQuote) {
    const selectQuote = document.querySelector("p#quote")
    const selectAuthor = document.querySelector("p#author")
    selectQuote.textContent = `"${randomQuote[0].quote}"`
    selectAuthor.textContent = `-${randomQuote[0].author}`
}

getQuote();
getCharacters()

function getCharacters(){
    fetch(charactersURL)
    .then(resp => resp.json())
    .then(character => { 
        // console.log(character[1].name)
        appendCharacters(character) 
        addCharacterOptions1(character)
        addCharacterOptions2(character)
        changeNameEvent(character)
    })
}

function appendCharacters(character){
    
    const walterImg = document.querySelector('img#walterImg')
    walterImg.src = character[0].img;
    walterImg.alt = "Walter White"

    const Character1 = document.querySelector('img#CharacterPic1')
    Character1.src = character.img
}

const nameDropdown = document.querySelectorAll(".names")

const nameDropdown1 = nameDropdown[0]
const nameDropdown2 = nameDropdown[1]

console.log(nameDropdown2)

function addCharacterOptions1(character) {
    const removeWalterArray = character.slice(1)
    removeWalterArray.forEach(character => {
        const characterOptions = document.createElement('option')
        characterOptions.textContent = character.name
        nameDropdown1.append(characterOptions);
    })
}

function addCharacterOptions2(character) {
    const removeWalterArray = character.slice(1)
    removeWalterArray.forEach(character => {
        const characterOptions = document.createElement('option')
        characterOptions.textContent = character.name
        nameDropdown2.append(characterOptions);
    })
}

function changeNameEvent(character) {
    nameDropdown1.addEventListener('change', (event) => {
        const inputValue = nameDropdown1.value;
        for(i = 0; i < character.length; i++){
            if(character[i].name === inputValue){
                console.log(character[i])
            }
        }
    })
}

// change img src
// add details to details div
