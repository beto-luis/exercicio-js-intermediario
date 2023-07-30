//Minha tentativa!

function trocarCorDoQuadro () {
    let trocarCor = document.getElementsByClassName('azul');

    let corAlterada = trocarCor[0];
    corAlterada.style.backgroundColor = 'yellow';
}



// Correção!
/*
const btnTrocarCor = document.getElementById("trocar-cor");

const quadroAzul = document.querySelector("azul");

btnTrocarCor.addEventListener("click", trocarCor);

function trocarCor() {
    quadroAzul.classList.remove("azul");
    quadroAzul.classList.add("amarelo");
}

*/