function set_nome_operacao(){
    //Pega a operação
    const operacao = document.getElementById('operador').value;
    //Muda o titulo
    if ( operacao === 'soma') document.getElementById('nome-operacao').innerHTML = "SOMA";
    if ( operacao === 'subt') document.getElementById('nome-operacao').innerHTML = "SUBTRAÇÃO";
    if ( operacao === 'mult') document.getElementById('nome-operacao').innerHTML = "MULTIPLICAÇÃO"; 
    if ( operacao === 'divi') document.getElementById('nome-operacao').innerHTML = "DIVISÃO"; 
    if ( operacao === 'expo') document.getElementById('nome-operacao').innerHTML = "EXPONENCIAÇÃO"; 
    if ( operacao === 'fato') document.getElementById('nome-operacao').innerHTML = "FATORAÇÃO"; 
    if ( operacao === 'raiz') document.getElementById('nome-operacao').innerHTML = "RAIZ QUADRADA"; 
}   

function calcule() {
    //pega numero x 
    const numero_x = Number (document.getElementById('numero-x').value);
    //pega numero y
    const numero_y = Number (document.getElementById('numero-y').value); 
    //Pega a operação
    const operacao =  document.getElementById('operador').value;

    if ( operacao === 'soma') document.getElementById('nome-operacao').innerHTML = "SOMA";
    if ( operacao === 'subt') document.getElementById('nome-operacao').innerHTML = "SUBTRAÇÃO";
    if ( operacao === 'mult') document.getElementById('nome-operacao').innerHTML = "MULTIPLICAÇÃO"; 
    if ( operacao === 'divi') document.getElementById('nome-operacao').innerHTML = "DIVISÃO"; 
    if ( operacao === 'expo') document.getElementById('nome-operacao').innerHTML = "EXPONENCIAÇÃO"; 
    if ( operacao === 'fato') document.getElementById('nome-operacao').innerHTML = "FATORAÇÃO"; 
    if ( operacao === 'raiz') document.getElementById('nome-operacao').innerHTML = "RAIZ QUADRADA";

    let resultado = 0;
    if ( operacao === 'soma' ) resultado = numero_x + numero_y;
    if ( operacao === 'subt' ) resultado = numero_x - numero_y;
    if ( operacao === 'mult' ) resultado = numero_x * numero_y;
    if ( operacao === 'divi' ) resultado = numero_x / numero_y;
    if ( operacao === 'expo' ) resultado = numero_x ** numero_y;
    if ( operacao === 'raiz' ) resultado = Math.sqrt(numero_x);
    
    document.getElementById('resultado').innerHTML = resultado
}

function fatorial(numero) {
   let multiplicador = numero - 1;
   while (multiplicador >= 2) {
       numero = numero*multipplicador
       multiplicador = multiplicador - 1;
   }
}