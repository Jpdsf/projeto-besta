let resposta = document.querySelector('#resposta')
let sim = document.querySelector('#sim')
let nao = document.querySelector('#nao')


function mostrarNao() {
    resposta.innerHTML = `<br>
    <div class="rest">
        <p> Realmente, ela é linda </p>
    </div>
    <br>
    <img src="https://pps.whatsapp.net/v/t61.24694-24/327510705_188936397087275_1538638275282208673_n.jpg?ccb=11-4&oh=01_AdQQL_JAO_uBp8zjLX5dLfOigSnYxVnqxqjcLAKAkciNug&oe=640D258A" alt="" srcset="">
    
    `

    
}
function mostrarSim() {
    resposta.innerHTML = `<br><div class="rest">
        <p> Infelizmente vc esta errado, ela é linda </p>
    </div>
    <br>
    <br>
    <img src="4be184bc-47a1-432b-9cc6-d4faa814.png" alt="" srcset="">

    `
}
