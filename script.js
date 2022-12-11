function sorteiaNumero(){
    return parseInt(Math.random() * 10)
}

function listaDeNumeros(x){

    let numeros = []

    let inicio = 0

    while(inicio < x){

        let numero = sorteiaNumero()

        let achou = false

        for(let posicao = 0; posicao < numeros.length; posicao++){

            if(numero == numeros[posicao]){

                achou = true

                break

            }

        }

        if(achou == false && numero != 0){

            numeros.push(numero)

            inicio++

        }

    }

    return numeros

}

let btn = document.querySelector('button')

const input = document.querySelector('input')

input.focus()

function jogoAdivinhaNumero(){

    let chances = Number(prompt('Quantas chances de acertar você quer?'))

   while(chances > 9){
        alert('As chances vão de 1 até 9')
        chances = Number(prompt('Quantas chances de acertar você quer?'))
    }

    let resultado = listaDeNumeros(chances)

    console.log(resultado)

    let chute = input.value

    let acertou = false

    let p = document.createElement('p')
    let div = document.querySelector('div')

        for(let i=0; i<resultado.length; i++){

            if(chute == resultado[i]){
                
                p.innerText = `Parabéns, você acertou. O seu chute foi: ${chute}. Suas chances foram de ${chances} vezes. Os números sorteados foram: ${resultado}.`
                div.appendChild(p)
                acertou = true
                break
            }

        }

        if(acertou == false){
            p.innerText = `Você errou :(. O seu chute foi: ${chute}. Suas chances foram de ${chances} vezes. Os números sorteados foram: ${resultado}.`
            div.appendChild(p)
        }

        input.value = ''

        function limpaParagrafo(){
            p.innerText = ''
        }
        input.addEventListener('click', limpaParagrafo)
}

btn.addEventListener('click', jogoAdivinhaNumero)


