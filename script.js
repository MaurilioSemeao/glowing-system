
function escreveTela(valores=[], resultado){
    let maior = document.getElementById('maior');
    let menor = document.getElementById('menor');
    let iguais = document.getElementById('iguais');
    let resTela = document.getElementById('resultado');

    maior.innerHTML = valores[0];
    menor.innerHTML = valores[1];
    iguais.innerHTML = valores[2];
    resTela.innerHTML = resultado.toString(); 
}

function verificaMaiorEmenor(num1,num2){
     let maior = num1;
     let menor = num2;
     let iguais = "nao";

    if(num1 === num2){
        iguais = "Sim";
    }
    if(num1 < num2){
        maior = num2;
        menor = num1;
    }
        let resultado=[maior,menor,iguais];
    return resultado;
}

function calcularEntradas(num1,num2,operacao){
    let resultado = 0;
    switch(operacao){
        case "adi":
            resultado = num1 + num2;
            break;
        case "sub":
            resultado = num1 - num2;
            break;
        case "div":
            resultado = num1 / num2;
            break;
        case "mult":
            resultado = num1 * num2;
            break;
    }
    return resultado;
}

const verificaOperacao =()=>{
    const btnRadio = document.querySelectorAll("input[name='operacao']")
    for(let i = 0; i < btnRadio.length; i++){
            if(btnRadio[i].checked){
                return btnRadio[i].value;
            }
    }
}

const btnValidar = () =>{
    const button1 = document.getElementById('button1');
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    
    button1.addEventListener('click', () =>{
        const verificaNum = verificaMaiorEmenor(numero1.value, numero2.value);
        let operador = verificaOperacao();
        let resultado = calcularEntradas(Number(numero1.value),Number(numero2.value),operador);
        escreveTela(verificaNum, resultado);
    });
}

 const pedeNome = () =>{
    let nome = "Olá " + prompt("Digite seu Nome")
    let texto  = document.getElementById('nome')
    texto.innerHTML = nome;
 }

const insereFrase = () =>{ 
    const texto = document.getElementById('texto')
    const btnh3 = document.getElementById('btntxt');
    btnh3?.addEventListener('click',()=>{
       let recebeTexto = prompt("Digite um Texto");
       texto.innerHTML = recebeTexto;
    });

}


 function iniciaEventos(){ 
     //pedeNome()
     insereFrase();
     btnValidar();
     
     
 }

 
window.addEventListener('load', iniciaEventos)
//  window.addEventListener('load',(e)=>{
//         iniciaEventos();
//  })


