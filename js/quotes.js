const quotes = [
    {
       quote: "All progress takes place outside the comfort zone.",
       author: "Michael John Bobak",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",  
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
    },
    {
        quote: "Success seems to be connected with action. Successful people keep moving.",
        author: "Conrad Hilton",  
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis", 
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon", 
    },
    {
        quote: "创造机会的人是勇者，等待机会的人是愚者。",
        author: "孔子", 
    },
    {
        quote: "世界会向那些有目标和远见的人让路。",
        author: "不详", 
    },
    {
        quote: "己所不欲勿施于人。",
        author: "孔子", 
    },
    {
        quote: "Only I can change my life, No one can do it for me.",
        author: "Unknown author", 
    },
    {
        quote: "Habit is second nature.",
        author: "Unknown author", 
    },
] 

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQote.quote;
author.innerText = `- ${todaysQote.author}`;