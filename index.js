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
    .then(character => { appendCharacters(character) 
        addCharacterOptions(character)
    })
}

function appendCharacters(character){
    
    const walterImg = document.querySelector('img#walterImg')
    walterImg.src = character[0].img;
    walterImg.alt = "Walter White"

    const Character1 = document.querySelector('img#CharacterPic1')
    Character1.src = character.img
}

function addCharacterOptions(character) {
    const removeWalterArray = character.slice(1)
    removeWalterArray.forEach(character => {
        const characterOptions = document.createElement('option')
        characterOptions.textContent = character.name
        console.log(characterOptions)
    })
}
