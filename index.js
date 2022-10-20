
function buttonFunction() {
    var b = document.createElement('BUTTON');
    window.location.assign('http://127.0.0.1:5500/searchpage.html');
}

function getRandomNumber(min, max){
    let random = Math.floor(Math.random() * max +min);
    return `https://pokeapi.co/api/v2/pokemon/${random}`
}      


function loadpk() {
    let url = getRandomNumber(1, 807);

    fetch(url)
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
    
        document.getElementById('nome').innerHTML = data['name'];
        for(let energia = 0; energia < data.stats.length; energia++ ){
            document.getElementById('HP').innerHTML = data.stats[energia].base_stat + ' HP';
        }

        document.getElementById('weight').innerHTML = data['weight'] + ' WEIGHT';
        document.getElementById('height').innerHTML = data['height'] + ' HEIGHT';

        let vazio = '';
        for (let tipos = 0; tipos < data.types.length; tipos++) {
                vazio = vazio + data.types[tipos].type.name + ' ,';
                document.getElementById('types').innerHTML = vazio + ' TYPES';
            }

        let img = data['sprites']['front_default']
        document.getElementById('pic').setAttribute('src', img);
    })
    .catch((erro) => {
        console.log('Erro' + erro);
    });
   
}

document.createElement('btn1');



