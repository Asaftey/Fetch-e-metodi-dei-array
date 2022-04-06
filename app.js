/* 1) Recupera con uno script i dati da questa API: https://v2.jokeapi.dev/joke/Programming

1. Ci interessa avere la proprietÃ  Setup e quella Delivery
2. Con questo endpoint: https://v2.jokeapi.dev/joke/Any?amount=10, filtra solamente di categoria Programming */


const btn = document.querySelector('.any-jokes')
const btnJokes = document.querySelector('.programing')
const body = document.querySelector('body')

const api = async()=>{
    const respons = await fetch('https://v2.jokeapi.dev/joke/Programming')
    const result = await respons.json();
    console.log(result)

    const setup = result.setup
    const p = document.createElement('p')
    body.appendChild(p).textContent = setup;

    const delivery = result.delivery
    const h1 = document.createElement('h1')
    body.appendChild(h1).textContent = delivery
}

btn.addEventListener('click', api)

const joke = async() => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?amount=10')
    const result = await response.json();
    const programing = result.jokes.filter(obj =>{
        return obj.category === 'Programming' 
    });

    programing.map(element => {
        const h2 = document.createElement('h2')
        body.appendChild(h2).textContent = element.joke
    });
}
btnJokes.addEventListener('click', joke);




