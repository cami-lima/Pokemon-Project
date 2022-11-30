
function buttonFunction() {
    //  let b = document.createElement('BUTTON');
    window.location.assign('http://127.0.0.1:5500/searchpage.html');
}

function getRandomNumber(min, max){
    let random = Math.floor(Math.random() * max +min);
    return `https://pokeapi.co/api/v2/pokemon/${random}`
}      

let pokemonSearched = {};

function loadpk() {
    let url = getRandomNumber(1, 807);

    fetch(url)
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        pokemonSearched = data;
    
        document.querySelector('h3.nome').innerHTML = data['name'].toUpperCase();
        for(let energia = 0; energia < data.stats.length; energia++ ){
            document.querySelector('p.HP').innerHTML = data.stats[energia].base_stat + ' HP';
        }
        console.log(data)

        document.querySelector('p.weight').innerHTML = data['weight'] + ' WEIGHT';
        document.querySelector('p.height').innerHTML = data['height'] + ' HEIGHT';

        let vazio = '';
        for (let tipos = 0; tipos < data.types.length; tipos++) {
                vazio = vazio + data.types[tipos].type.name + ' ,';
                document.querySelector('p.types').innerHTML = vazio + ' TYPES';
            }

        let img = data['sprites']['front_default']
        document.querySelector('img.pic').setAttribute('src', img);    
    })
    .catch((erro) => {
        console.log('Erro' + erro);
    });

}

function save(){
    console.log('adicionou!')
    console.log(pokemonSearched )
    localStorage.setItem('infoPokemon', JSON.stringify(pokemonSearched));
    let info = localStorage.getItem('infoPokemon');
}





// document.createElement('btn1');



