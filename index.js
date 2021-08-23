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
getWalterWhite()

function getWalterWhite(){
    fetch(charactersURL)
    .then(resp => resp.json())
    .then(walter => appendWalter(walter))
}

function appendWalter(walter){
    const walterImg = document.querySelector('img#walterImg')
    walterImg.src = walter[0].img;
    walterImg.alt = "Walter White"
}
