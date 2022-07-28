let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";
let titulo = document.title;
let ondeInserir = document.querySelector('.grid');
let tempArq = '';
let novaImg = null;

for(let i = 1; i<91; i++){
    if(i<10){
        tempArq = './galeria/foto00' + i + '.jpeg';
        novaImg = document.createElement('img');
        novaImg.src = tempArq;
        novaImg.className = 'imagem';
        ondeInserir.appendChild(novaImg);
    }
    if(i>=10 && i<91){
        tempArq = './galeria/foto0' + i + '.jpeg';
        novaImg = document.createElement('img');
        novaImg.src = tempArq;
        novaImg.className = 'imagem';
        ondeInserir.appendChild(novaImg);
    }
}
var_imagens = document.getElementsByClassName('imagem')
for(let i = 0; i<var_imagens.length; i++){
    var_imagens[i].addEventListener('click', function(){
        srcVal = var_imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
};

btClose.addEventListener('click', function(){
    modal.setAttribute('visible','none');
});
modal.addEventListener('click',function(){
    modal.classList.toggle('modal_active');
});
