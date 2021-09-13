/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [
  { 
    quote: "Who controls the past controls the future. Who controls the present controls the past.",
    source: "George Orwell",
    citation: "Nineteen Eighty-Four",
    year: 1947
  },
  { 
    quote: "I am not afraid of storms, for I am learning how to sail my ship.",
    source: "Louisa May Alcott",
    citation: "Little Women",
    year: 1869
  },
  { 
    quote: "This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man",
    source: "Shakespeare",
    
    

  },
  { 
    quote: "The only way out of the labyrinth of suffering is to forgive.",
    source: "John Green",
    citation: "Looking for Alaska",
    year: 2005

  },
  { 
    quote: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It’s when you know you’re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.",
    source: "Harper Lee",
    citation: "To Kill a Mockingbird",
    year: 1960
  }
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

/***
 * `printQuote` function
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
  html = html.concat(`</p>`);
  return document.getElementById('quote-box').innerHTML = html; 
}


 



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);