
function buttonFunction() {
    var b = document.createElement('BUTTON');
    window.location.assign('http://127.0.0.1:5500/searchpage.html');
}

function loadpk() {
    let url = 'https://pokeapi.co/api/v2/pokemon/25'
   
    fetch(url)
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        
        document.getElementById('nome').innerHTML = data['name'];
        document.getElementById('HP').innerHTML = data['HP'];
        document.getElementById('weight').innerHTML = data['weight'];
        document.getElementById('height').innerHTML = data['height'];
        document.getElementById('type').innerHTML = data['type']
        let img = data['sprites']['front_default'];
        document.getElementById('pic').setAttribute('src', img);
    })
    .catch((erro) => {
        console.log('Erro' + erro);
    });

}

document.createElement('btn1');



