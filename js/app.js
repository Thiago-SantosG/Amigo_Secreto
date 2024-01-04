let Amigos = [];

function adicionar(){
    let Amigo = document.getElementById('nome-amigo');

    if(Amigo.value == '') {
        alert('informe o nome do amigo!');
        return;
    }

    if(Amigos.includes(Amigo.value)){
        alert('Nome já adicionado!');
        return;
    }

    let ListaAmigos = document.getElementById('lista-amigos');
    Amigos.push(Amigo.value);

    if(ListaAmigos.textContent == ''){
        ListaAmigos.textContent = Amigo.value;
    }else {
        ListaAmigos.textContent = ListaAmigos.textContent + ', ' + Amigo.value;
    }
    Amigo.value ='';

    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    if (Amigos.length <4) {
        alert('Adicione pelo menos 4 amigos!')
        return;
    }
    embaralha(Amigos);
    let ListaSorteio = document.getElementById('lista-sorteio');
    for(let i = 0; i < Amigos.length; i++){
        if(i == Amigos.length -1){
        ListaSorteio.innerHTML = ListaSorteio.innerHTML + Amigos[i] + '--> ' + Amigos[0] + '<br>'
        }else {
        ListaSorteio.innerHTML = ListaSorteio.innerHTML + Amigos[i] + '--> ' + Amigos[i + 1] + '<br>'
        }
    }
}

function excluirAmigo(index) {
    Amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(ListaAmigos){
    for (let indice = ListaAmigos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        //Atribuição via destructuring
        [ListaAmigos[indice -1], ListaAmigos[indiceAleatorio]] =
            [ListaAmigos[indiceAleatorio], ListaAmigos[indice -1]];
    }
}

function atualizarSorteio(){
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista(){
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for(let i = 0; i < Amigos.length; i++) {
        // Cria um elemento de paragrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = Amigos[i];

        // Adiciona um evento de clique para deletar amigo
        paragrafo.addEventListener('click', function(){
            excluirAmigo(i);
        });

        // add paragrafo á lista
        lista.appendChild(paragrafo);
    }
}

function reiniciar(){
    Amigos = [];
    ListaAmigos = document.getElementById('lista-amigos').innerHTML = '';
    ListaSorteio = document.getElementById('lista-sorteio').innerHTML = '';
}




