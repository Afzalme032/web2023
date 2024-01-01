let quotes = [
    {
        quote:'Words have meaning and names have power.',
        author : 'Author Unknown'
    },
    {
        quote:'Proper names are poetry in the raw.  Like all poetry they are untranslatable.',
        author : 'W.H. Auden'
    },
    {
        quote:'I’m gonna tell a real story. I’m gonna start with my name',
        author : 'Kendrick Lamar'
    },
    {
        quote:'Always end the name of your child with a vowel, so that when you yell the name will carry',
        author : 'Bill Cosby'
    },
    {
        quote:'Tigers die and leave their skins; people die and leave their names',
        author : 'Japanese Proverb'
    },
]

let btn = document.getElementById('btn')
let quote = document.getElementById('quote')
let author = document.getElementById('author')

btn.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*quotes.length);
    //console.log(quotes.length)
    // let generate = quotes[random]
    // quote.innerHTML = generate.quote;
    // author.innerHTML = generate.author
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author
})