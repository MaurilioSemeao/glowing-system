

function mudaFrase(){
    const divInput = document.getElementsByClassName("item");
    const textoh3 = document.getElementById('textoh3');
    const textoOriginal = textoh3.innerHTML;

    divInput[0].addEventListener('mouseover',() => {
        textoh3.innerHTML = "Digite os Valores Numéricos "
    },false);
    divInput[1].addEventListener('mouseover',() => {
        textoh3.innerHTML = "Selecione a Operação Desejada"
    },false);
    divInput[2].addEventListener('mouseover',() => {
        textoh3.innerHTML = "Verifique o Resualtado"
    },false);
    
    for(let i in divInput){
        divInput[i].addEventListener('mouseout',() => {
            textoh3.innerHTML = textoOriginal;
        });
    }    
}

function retornoTela(verificador = true){
    const retorno = document.getElementById("retorno");
    let menssagen = "Numero inserido Calculado";
        retorno.classList.remove('numerro')
        retorno.classList.add('numvalido');
    if(verificador === false){
        menssagen = "Numero inserido Invalido";
        retorno.classList.remove('numvalido')
        retorno.classList.add('numerro');
    }

    retorno.innerHTML = menssagen;
}

function tabuada(num1,auto){
    if(num1 < 1 || num1 > 10 || num1==""){
        return false;
    }
    const divTela = document.getElementById('divtela');
    const newResult= document.createElement('span');

    if(divTela.childElementCount > 10)
        divTela.innerHTML = undefined;

    let mult =(`${auto} X ${num1} = ${auto * num1}`);
    let texto = document.createTextNode(mult);

    newResult.classList.add('result-tabuada');
    newResult.appendChild(texto)
    divTela.appendChild(newResult);
    
    if(auto < 10)
    tabuada(num1,++auto);
    // console.log(auto);

}

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

const btnCalcularTabuada = () =>{
    const btnCal = document.getElementById('button2');
    const numero = document.getElementById('numtb');

    btnCal.addEventListener('click', () =>{
        let verifica = tabuada(Number(numero.value),0);
            retornoTela(verifica)
    });
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
     btnCalcularTabuada();
     mudaFrase();
     
     
 }

 
window.addEventListener('load', iniciaEventos)
//  window.addEventListener('load',(e)=>{
//         iniciaEventos();
//  })


