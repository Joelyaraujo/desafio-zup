const imagem = document.querySelector('img');
const main = document.querySelector('main');
const p = document.querySelector('p');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    
    var personagens = new Array(); 
    for (let i=0;i<4;i++) {
        personagens[i] = gerarValorAleatorio();
    }

    return fetch(`https://rickandmortyapi.com/api/character/${personagens}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {

        data.forEach(function(dados) {
        main.innerHTML= main.innerHTML + '<section> '
        +'<img src="'+ dados.image+'">'
        +'<p>'+ dados.name+'</p>'
        +'</section>';
        });
        
    });
}

pegarPersonagem();


