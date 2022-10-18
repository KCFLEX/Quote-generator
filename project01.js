// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

// Array for Quotes
const quotes = [{
    quote: `"The greatest glory in living lies not in never falling, 
    but in rising every time we fall. "`,
    person: `Nelson Mandela`
}, {
    quote: `"The way to get started is to quit talking and begin doing. "`,
    person: `Walt Disney`
}, {
    quote: `"If life were predictable it would cease to be life,
     and be without flavor. "`,
    person: `Eleanor Roosevelt`

}, {
    quote: `"If you set your goals ridiculously high and it's a failure,
     you will fail above everyone else's success. "`,
    person: `James Cameron`

}, {
    quote: `"Success is most often achieved by those
     who don't know that failure is inevitable. "`,
    person: `Coco Chanel`

}, {
    quote: `"Learn from yesterday, live for today, hope for tomorrow.
     The important thing is not to stop questioning. "`,
    person: `Albert Einstein`

}, {
    quote: `"All our dreams can come true
     if we have the courage to pursue them. "`,
    person: `Walt Disney`

}, {
    quote: `"It does not matter how slowly you go,
     so long as you do not stop. "`,
    person: `Confucius`

}, {
    quote: `"Success is walking from failure to failure 
    with no loss of enthusiasm. "`,
    person: `Winston Churchill`

}, {
    quote: `"Opportunities don't happen. 
    You create them. "`,
    person: `Chris Grosser`

}, {
    quote: `"You only live once, but if you do it right, once is enough. "`,
    person: `Mae West`

},
];

btn.addEventListener('click', function() {

   let random = Math.floor(Math.random() * quotes.length) 
    
   quote.innerText = quotes[random].quote;
   person.innerText = quotes[random].person;
})