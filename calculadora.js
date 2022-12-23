const numero1 = parseInt (document.getElementById("1").innerHTML);
const numero3 = parseInt (document.getElementById("3").innerHTML);
const operacion = document.getElementById("+").innerHTML;
const display = document.getElementById("result");
const igualResultado = document.getElementById("igual");



const resultado = (op, num1, num3) =>{
    if (op === "+"){
        return num1 + num3;
    }else if (op === "-"){
        return num1 - num3;
    }else if (op === "/"){
        return num1 / num3;
    }

}

igualResultado.addEventListener("click", ()=>{
    display.textContent = resultado(operacion, numero1, numero3);
});

console.log(resultado (operacion, numero1, numero3));