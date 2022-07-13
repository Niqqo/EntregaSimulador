const titulo = "Algoritmo ->  Muestra si es par/impar hasta el numero deseado. El programa no permite ingresar numeros negativos ni 0."

const jugandoConNumerosPositivos = (numero) => {
    if(numero > 0){
        for (let i = 1; i <= numero; i++) {
            if (i % 2 == 0 && numero > 0) {
                console.log(`${i} es par`)
            }
            else {
                console.log(`${i} es impar`)
            }
        }
    }
    else{
        console.log("No se permiten numeros negativos ni un 0 :(")
    }
}

console.log(jugandoConNumerosPositivos(0))

