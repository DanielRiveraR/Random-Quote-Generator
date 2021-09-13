/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/


/*** 
 * An object stored in an array as a list of quotes, authors and, in some cases, citations and year.  
***/
const quotes = [
  { 
    quote: "Who controls the past controls the future. Who controls the present controls the past.",
    source: "George Orwell",
    citation: "Nineteen Eighty-Four",
    year: 1947,
    category: "Inspiring"
  },
  { 
    quote: "I am not afraid of storms, for I am learning how to sail my ship.",
    source: "Louisa May Alcott",
    citation: "Little Women",
    category: "Inspiring"
  },
  { 
    quote: "This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man",
    source: "Shakespeare",
    category: "Inspiring"
  },
  { 
    quote: "The only way out of the labyrinth of suffering is to forgive.",
    source: "John Green",
    citation: "Looking for Alaska",
    year: 2005,
    category: "Wisdom"
  },
  { 
    quote: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It’s when you know you’re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.",
    source: "Harper Lee",
    citation: "To Kill a Mockingbird",
    year: 1960,
    category: "Wisdom"
  }
];


/***
 * This function takes out randomly a quote from the array above.
***/
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}


/***
 * This function perform this three task: (a) picks a random quote object from the array.
 * (b) Use the returned quote object to build a string of HTML and quote properties.
 * (c) Use that string to display a random quote in the browser.
***/
function printQuote() {
  const quoteBrowser = getRandomQuote();
  let html = `
    <p class="quote">${quoteBrowser.quote}</p>
    <p class="source">${quoteBrowser.source}`; 

  if (quoteBrowser.citation) {
    const citationHTML = `<span class="citation">${quoteBrowser.citation}</span>`;
    html = html.concat(citationHTML);
  }
  if (quoteBrowser.year) {   
      const yearHTML = `<span class="year"> ${quoteBrowser.year}</span>`;
      html = html.concat(yearHTML);
  }
  if (quoteBrowser.category) {
    const categoryHTML = `<span class="year"> ${quoteBrowser.category}</span>`;
    html = html.concat(categoryHTML);
  }
  html = html.concat(`</p>`);
  return document.getElementById('quote-box').innerHTML = html; 
}

/*** 
 * This function updates the background color to a random color.
***/
function randomBgColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const backgroundColor = `rgb( ${r}, ${g}, ${b} )`;
  document.body.style.background =backgroundColor;
}


/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", randomBgColor, false);

/***
 * This function update the quote on the page at regular intervals of 10 secs.
 ***/
setInterval(() => {
  printQuote();
  randomBgColor();
}, 10000);
  
  



