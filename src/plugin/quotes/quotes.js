const quotes = '../../quotes/quotes.json'

function randomNum (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}

async function setQuotes(){
    let num = randomNum(0,quotes.length-1)
    const quotesText = document.querySelector('.quote__text')
    const quotesAuthor = document.querySelector('.quote__author')
    const data = await fetch(quotes)
    const res = await data.json()
    quotesText.textContent = `"${res[num].text}"`
    quotesAuthor.textContent = `"${res[num].author}"`
}

export default setQuotes