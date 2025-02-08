// Script para carregar foto do produto ao cadastrar e/ou editar

const inputFile = document.querySelector('#picture__input');
const pictureImage = document.querySelector('.picture__image');
const pictureImageTxt = 'Escolha uma imagem';
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function(e) {
            const readerTarget = e.target;
            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture__img');

            pictureImage.innerHTML = '';

            pictureImage.appendChild(img);

        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
    
});

// Script para abrir popup de Cadastro e edição de Produto

const botaoEditarProduto = document.getElementById('botaoEditar');
const botaoSalvarProduto = document.getElementById('botaoSalvarProduto');
const botaoExcluirProduto = document.getElementById('botaoExcluirProduto');
const botaoFecharProduto = document.getElementById('botaoFecharProduto');
const botaoCadastrarProduto = document.getElementById('cadastrarNovoProduto');
const popupCadastroProduto = document.getElementById('popupCadastroProduto');
var imgProduto = document.getElementById('produtosImg');
var imgAtual = imgProduto.getAttribute('src');

// Abrir o popup de cadastro de produto pegando os dados do produto existente
botaoEditarProduto.addEventListener('click', () => {      
    popupCadastroProduto.classList.add('ativo');          
    const img1 = document.createElement('img');
    img1.classList.add('picture__img');
    img1.src = imgAtual;
    pictureImage.innerHTML = '';
    pictureImage.appendChild(img1);

    const tituloAtualProduto = document.getElementById('tituloDoProduto').innerHTML;
    const descricaoAtualProduto = document.getElementById('descricaoDoProduto').innerText;
    const precoAtualProduto = document.getElementById('precoDoProduto').innerText;

    const inputTituloProduto = document.getElementById('tituloProduto');
    inputTituloProduto.value = tituloAtualProduto;

    const inputDescricaoProduto = document.getElementById('descricaoProduto');
    inputDescricaoProduto.value = descricaoAtualProduto;

    const inputPrecoProduto = document.getElementById('precoProduto');
    inputPrecoProduto.value = precoAtualProduto;
});

botaoCadastrarProduto.addEventListener('click', () => {
    popupCadastroProduto.classList.add('ativo')
});
 
botaoSalvarProduto.addEventListener('click', () => {
    popupCadastroProduto.classList.remove("ativo")
});

botaoExcluirProduto.addEventListener('click', () => (
    popupCadastroProduto.classList.remove('ativo')
));

botaoFecharProduto.addEventListener('click', () => (
    popupCadastroProduto.classList.remove('ativo')
));

