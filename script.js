

const calcularEntrada =()=>{
    const btnRadio = document.querySelectorAll("input[name='operacao']")
    for(let i = 0; i < btnRadio.length; i++){
            if(btnRadio[i].checked){
                console.log(btnRadio[i].value)
            }
    }
}

const btnValidar = () =>{
    const button1 = document.getElementById('button1');
    button1.addEventListener('click', () =>{
        calcularEntrada();
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


