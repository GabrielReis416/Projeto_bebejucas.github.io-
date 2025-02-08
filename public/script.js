//Carrossel

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img")

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(carrossel, 1800);

//Script do Popup do Cadastro de usuário

const botaoCadastrarUsuario = document.getElementById('cadastrarUsuario');
const botaoSair = document.getElementById('sairDoCadastro');
const botaoSalvarUsuario = document.getElementById('salvarUsuario');
const popupCadastro = document.getElementById('popup-cadastro');

botaoCadastrarUsuario.addEventListener("click", () => (
    popupCadastro.classList.add("ativo")
));

botaoSair.addEventListener("click", () => (
    popupCadastro.classList.remove("ativo")
));
 
botaoSalvarUsuario.addEventListener('click', () => {
    popupCadastro.classList.remove("ativo")
});

//Função para padronizar o input de telefone

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}
  
const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

// Ocultar senha do input de cadastro

document.addEventListener('DOMContentLoaded', () => {
    icone.classList.add('esconder')
});

const sennhaDeUsuario = document.getElementById('senhaDeCadastroUsuario');
const icone = document.getElementById('icone');

function mostrarEsconder(){
    if(sennhaDeUsuario.type === 'password'){
        sennhaDeUsuario.setAttribute('type', 'text');
        icone.classList.remove('esconder')
    }
    else{
        sennhaDeUsuario.setAttribute('type', 'password');
        icone.classList.add('esconder')
    }
}


// Script para carregar foto do Usuário

const inputFile = document.querySelector('#editarImg__input');
const pictureImage = document.querySelector('.editarImg__imagem');
const pictureImageTxt = 'Escolha uma imagem';
var imgAtual = 'img/usuario.png';

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function(e) {
            const readerTarget = e.target;
            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('editarImg__img');

            pictureImage.innerHTML = '';

            pictureImage.appendChild(img);

        });

        reader.readAsDataURL(file);
    } else {
        const img1 = document.createElement('img');
        img1.classList.add('editarImg__img');
        img1.src = imgAtual;
        pictureImage.innerHTML = '';
        pictureImage.appendChild(img1);
    }
    
});

// Script do popup de Dados de Usuario

const botaoMostrarDadosUsuario = document.getElementById('mostrarDadosUsuario');
const botaoSairPopupDadosUsuario = document.getElementById('sairPopupDadosUsuario');
const botaoEditarUsuario = document.getElementById('editarDadosUsuario');
const popupDadosUsuario = document.getElementById('popup-dadosUsuario');

botaoMostrarDadosUsuario.addEventListener("click", () => (
    popupDadosUsuario.classList.add("ativo1")
));

botaoSairPopupDadosUsuario.addEventListener("click", () => (
    popupDadosUsuario.classList.remove("ativo1")
));
 
botaoEditarUsuario.addEventListener('click', () => {
    popupDadosUsuario.classList.remove("ativo1")
    popupEditarDados.classList.add("ativo2")
    const img1 = document.createElement('img');
    img1.classList.add('editarImg__img');
    img1.src = imgAtual;
    pictureImage.innerHTML = '';
    pictureImage.appendChild(img1);
});


// Script do Popup Editar dados de usuário


const botaovoltarDeEditar = document.getElementById('voltarDeEditar');
const botaoSalvarDadosUsuario = document.getElementById('salvarDadosUsuario');
const popupEditarDados = document.getElementById('popup-editarDados');

botaovoltarDeEditar.addEventListener("click", () => (
    popupEditarDados.classList.remove("ativo2")
    (popupDadosUsuario.classList.add("ativo1"))
));
 
botaoSalvarDadosUsuario.addEventListener('click', () => {
    popupEditarDados.classList.remove("ativo2")
});


//  Cadastro do usuario 

document.getElementById('salvarUsuario').addEventListener('click', function() {
    // pegar valores do campos nome, telefone e senha
    const nome = document.getElementById('nomeDeCadastroUsuario').value;
    const telefone = document.getElementById('telefoneDeCadastroUsuario').value;
    const email = document.getElementById('emailDeCadastroUsuario').value;
    const senha = document.getElementById('senhaDeCadastroUsuario').value;

    // pegar valores do campos nome, telefone e senha Fim

    // Enviar os dados para o servidor
    fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, telefone, email, senha })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.mensagem); // mensagem sobre a conexão se estiver correta !
        document.getElementById('nomeDeCadastroUsuario').value = "";
        document.getElementById('telefoneDeCadastroUsuario').value = "";
        document.getElementById('emailDeCadastroUsuario').value = "";
        document.getElementById('senhaDeCadastroUsuario').value = "";
    })
    .catch(error => {
        console.error("Erro ao cadastrar:", error);
        alert("Erro ao cadastrar usuário.");
    });
});

     // Enviar os dados para o servidor Fim 