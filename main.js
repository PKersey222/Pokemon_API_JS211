// require('dotenv').config()



// console.log(process.env)

// const api_key = process.env.SECRET_API_KEY;

// console.log(api_key)

// let arrayOfPosts;
const list = document.getElementById('list')
// list.innerHTML =`
// <li> Hello world</li>
// <li> Hello world</li>
// <li> Hello world</li>
// <li> Hello world</li>
// <li> Hello world</li>
//  `

const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(posts => {
        const pokemons = posts.results
        pokemons.forEach((pokemon)=>{
            console.log(pokemon)
            fetch(pokemon.url).then(res => res.json()).then(pokeData =>{
                console.log(pokeData)
                const li = document.createElement('li')
                li.innerHTML = `
                    <img src=${pokeData.sprites.other['official-artwork'].front_default}>
                    <li>${pokemon.name} </li>
                 `
                list.appendChild(li)
            })
        })
        })

    // const http = require ("https")
}

fetchData()

// get a list of characters from an api (needs fetch)
