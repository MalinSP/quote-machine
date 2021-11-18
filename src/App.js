import React, { useState, useEffect } from 'react';
import './App.scss';
import COLORS_ARR from "./colors"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
const [quote, setQuote] = useState("If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.")
const [author, setAuthor] = useState("Oprah Winfrey")
const [randomNumber, setRandomNumber] = useState(0)
const [quotesArr, setQuotesArr] = useState(null)
const [accentColor, setAccentColor] = useState("#CC9999")
 
const fetchQuotes = async (url) => {
  const response = await fetch(url)
  const parsedJSON = await response.json()
  setQuotesArr(parsedJSON.quotes)
  console.log(parsedJSON)
  }

useEffect(() => {
  fetchQuotes(quoteDBUrl)
  }, [quoteDBUrl])

const getRandomQuote = () => {
  let randomInt = Math.floor(quotesArr.length * Math.random())
  let randomColor = Math.floor(COLORS_ARR.length * Math.random())
  setRandomNumber(randomInt)
  setAccentColor(COLORS_ARR[randomColor])
  setQuote(quotesArr[randomInt].quote)  
  setAuthor(quotesArr[randomInt].author)
}

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: accentColor}}>
        <div id="quote-box" style={{color: accentColor}}>
        <p id="text" >"{quote}"</p>
        <p id="author"> - {author}</p>
        <div className="buttons">
        <a style={{backgroundColor: accentColor}} id="tweet-quote"  target="_blank" href={encodeURI('http://www.twitter.com/intent/tweet?text=' + quote + "  - " + author)}><FontAwesomeIcon icon ={faTwitter} /></a>
        <button  id="new-quote" style={{backgroundColor: accentColor}} onClick={()=> getRandomQuote()}>Change Quote</button>
        </div>
        
        </div>
      </header>
    </div>
  );
}

export default App;
