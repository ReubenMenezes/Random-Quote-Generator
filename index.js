window.addEventListener("DOMContentLoaded", getAndRenderQuote);
async function getAndRenderQuote() {
  // Get data
  const data = await fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  );
  const dataJson = await data.json();
  const randomQuote =
    dataJson.quotes[Math.floor(Math.random() * dataJson.quotes.length)];
  const { quote, author } = randomQuote;
  // Render data
  const backgrounds = ["#004e64", "#396a5e", "#63adf2", "#008f85", "#32a852"];
  const elements = ["body", "tweet-quote", "new-quote"];
  const textEl = document.getElementById("text");
  const authorEl = document.getElementById("author");
  const tweetBtn = document.getElementById("tweet-quote");
  const randomBgColor = Math.floor(Math.random() * backgrounds.length);
  elements.forEach((e) => {
    const element = document.getElementById(e);
    element.style.backgroundColor =
    backgrounds[randomBgColor];
  });
  document.body.style.backgroundColor = textEl.innerText = quote;
  authorEl.innerText = author;
  tweetBtn.setAttribute(
    "href",
    `https://twitter.com/intent/tweet?text=${quote} - ${author}`
  );
}
document
  .getElementById("new-quote")
  .addEventListener("click", getAndRenderQuote);
