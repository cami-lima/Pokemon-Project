
function buttonFunction() {
    var b = document.createElement('BUTTON');
    window.location.assign('http://127.0.0.1:5500/searchpage.html');
}

function getRandomNumber(min, max){
    let random = Math.floor(Math.random() * 807 +1);
    return `https://pokeapi.co/api/v2/pokemon/${random}`
}      


function loadpk() {
    let url = getRandomNumber(1, 807);

    fetch(url)
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        // console.log(data);
        // console.log(data.types);
        // console.log(data.types[0]);
        // console.log(data.types[0].type.name)
        
        // var tipo;
        // for( tipo=0; tipo <=3; tipo ++){
        //     console.log(tipo)
        //     console.log(data.types[tipo].type.name)
        // }

        document.getElementById('nome').innerHTML = data['name'];
        document.getElementById('HP').innerHTML = data['HP'] + ' HP';
        document.getElementById('weight').innerHTML = data['weight'] + ' WEIGHT';
        document.getElementById('height').innerHTML = data['height'] + ' HEIGHT';
        document.getElementById('types').innerHTML = data['type'] + ' TYPES';

        let img = data['sprites']['front_default']
        document.getElementById('pic').setAttribute('src', img);
    })
    .catch((erro) => {
        console.log('Erro' + erro);
    });
   
}

document.createElement('btn1');



