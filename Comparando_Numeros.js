function comparandoNumeros(n1, n2){ //Fundamental iniciar com uma função.

    if(!n1 || !n2) return 'Defina dois números!'; //Tomadas de decisões é fundamental.

    const frase1 = criafrase1(n1, n2);
    const frase2 = criafrase2(n1, n2);

    return `${frase1} ${frase2}.` //Retorna no terminal a solução.
}
function criafrase1(n1, n2){
    let saoIguais = '';

    if(n1 !== n2){
        saoIguais = 'não';
    }
    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.` 
};

function criafrase2(n1, n2){

    const soma = n1 + n2; //Operação básica de soma.

    let resultado10 = 'menor'; 
    
    /*"O let permite que você declare variáveis limitando seu escopo no bloco,
     instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword var,
     que define uma variável globalmente ou no escopo inteiro de uma função,
     independentemente do escopo de bloco."*/

    let resultado20 = 'menor';

    const compara10 = soma >10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }
    if(compara20){
        resultado20 = 'maior';
    }
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.` 
}   
console.log(comparandoNumeros(20, 10));
//É fundamental acionar o terminal através do comenado console.log(nome da função (parâmetros));


