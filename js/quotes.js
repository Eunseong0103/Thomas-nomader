const quotes = [
  {
    quote: "life quotes1",
    author: "author1",
  },
  {
    quote: "life quotes2",
    author: "author2",
  },
  {
    quote: "life quotes3",
    author: "author3",
  },
  {
    quote: "life quotes4",
    author: "author4",
  },
  {
    quote: "life quotes5",
    author: "author5",
  },
  {
    quote: "life quotes6",
    author: "author6",
  },
  {
    quote: "life quotes7",
    author: "author7",
  },
  {
    quote: "life quotes8",
    author: "author8",
  },
  {
    quote: "life quotes9",
    author: "author9",
  },
  {
    quote: "life quotes10",
    author: "author10",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
