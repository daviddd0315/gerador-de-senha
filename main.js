const numeroSenha = document.querySelector('parametro-senha-texto');
let tamanhoSenha = 12;
numeroSenha.textContent = numeroSenha;
const botoes = document.querySelectorAll('parametro-senha-botao');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%&*()_+=-[]{};:,.<>?';
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca-senha');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        //tamanhoSenha = tamanhoSenha-1; possível fazer dessa forma também
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}

function aumentaTamanho(){
    if(tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha+1; possível fazer dessa forma também
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}
console.log(botoes);

for (let i = 0; i < checkbox.length; i++){
    checkbox[i].onclick = gerarSenha;
}

campoSenha.value = letrasMaiusculas;
gerarSenha();

function gerarSenha(){
let alfabeto = '';
    if(checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if(checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if(checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if(checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);
let senha = '';
    for(let i = 0; i < tamanhoSenha; i++){
    let numeroAleatorio = Math.random()*alfabeto.length;
    senha = senha + alfabeto[numeroAleatorio];
    numeroAleatorio = Math.floor(numeroAleatorio);
}
campoSenha.value = senha;
classificaSenha(alfabeto.length);
}

function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if (tamanhoSenha > 56){
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 35 && tamanhoSenha < 56){
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha <= 35){
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = "Uma senha com " + Math.floor(2 ** entropia / 100e6 * 60 * 60 * 24 * 365) + " anos para ser quebrada";
}