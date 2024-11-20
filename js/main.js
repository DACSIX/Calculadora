let resultado = document.querySelector("#resultado");
const borrar_todo = document.querySelector("#borrar-todo");
const porcentaje = document.querySelector("#porcentaje");
const dividir = document.querySelector("#dividir");
const borrar = document.querySelector("#borrar");
const numero7 = document.querySelector("#siete");
const numero8 = document.querySelector("#ocho");
const numero9 = document.querySelector("#nueve");
const numero4 = document.querySelector("#cuatro");
const numero5 = document.querySelector("#cinco");
const numero6 = document.querySelector("#seis");
const numero1 = document.querySelector("#uno");
const numero2 = document.querySelector("#dos");
const numero3 = document.querySelector("#tres");
const numero0 = document.querySelector("#cero");
const sumar = document.querySelector("#sumar");
const igual = document.querySelector("#igual");
const coma = document.querySelector("#coma");

resultado.value = "0";
let numberOne = 0;
let numberTwo = 0;
let operador = null;
let res = "";
//Numeros

numero7.addEventListener("click", () => {
    res += "7";
    resultado.value = res;
})

numero8.addEventListener("click", () => {
    res += "8";
    resultado.value = res;
})

numero9.addEventListener("click", () => {
    res += "9";
    resultado.value = res;
})

numero4.addEventListener("click", () => {
    res += "4";
    resultado.value = res;
})

numero5.addEventListener("click", () => {
    res += "5";
    resultado.value = res;
})

numero6.addEventListener("click", () => {
    res += "6";
    resultado.value = res;
})

numero1.addEventListener("click", () => {
    res += "1";
    resultado.value = res;
})

numero2.addEventListener("click", () => {
    res += "2";
    resultado.value = res;
})

numero3.addEventListener("click", () => {
    res += "3";
    resultado.value = res;
})

numero0.addEventListener("click", () => {
    res += "0";
    resultado.value = res;
})

//Boton de borrar todo
borrar_todo.addEventListener("click", () => {
    resultado.value = "0";
    res = "";
    numberOne = 0;
    //numberTwo = 0;
    operador = null;
})

//borrar de a poco

borrar.addEventListener("click", () => {
    res = res.slice(0, -1); //borra el ultimo caracter de la cadena
    resultado.value = res;
    numberOne = 0;
})

//Operacion sumar numeros
sumar.addEventListener("click", () => {
    if (res !== "") {
        numberOne += parseFloat(res);
    }
    res = "";
    operador = "+";
    resultado.value = numberOne.toString();
})
//operacion restar numeros
restar.addEventListener("click", () => {
    if (res !== "") numberOne = parseFloat(res);
    res = "";
    operador = "-";
    resultado.value = numberOne.toString();
});
//operacion multiplicar numeros
multiplicar.addEventListener("click", () => {
    if (res !== "") numberOne = parseFloat(res);
    res = "";
    operador = "*";
    resultado.value = numberOne.toString();
});
//operacion dividir numeros
dividir.addEventListener("click", () => {
    if (res !== "") numberOne = parseFloat(res);
    res = "";
    operador = "/";
    resultado.value = numberOne.toString();
});
//operacion porcentaje
porcentaje.addEventListener("click", () => {
    if (res !== "") {
        res = (parseFloat(res) / 100).toString();
        resultado.value = res;
    }
});
//punto decimal
coma.addEventListener("click", () => {
    if (!res.includes(".")) {
        if (res === "") res = "0"; // Si empieza con decimal
        res += ".";
        resultado.value = res;
    }
});

//igual
igual.addEventListener("click", () => {
    if (res != "") {
        let error = false;
        numberTwo = parseFloat(res);
        switch (operador) {
            case '+':
                numberOne += numberTwo;
                break;
            case '-':
                numberOne -= numberTwo;
                break;
            case '*':
                numberOne *= numberTwo;
                break;
            case '/':
                if (numberTwo != 0) {
                    numberOne /= numberTwo;
                } else {
                    error = true;
                }
                break;
        }
        if (error) {
            resultado.value = "error";
        } else {
            resultado.value = numberOne.toString();
        }
        res = "";
        operador = null;
    }
})