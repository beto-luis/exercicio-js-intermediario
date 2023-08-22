const quadro = document.querySelector('.quadro');

quadro.addEventListener('click', () => {
    const verificacaoDeCor = quadro.classList.contains('azul');
    if(verificacaoDeCor) {
        quadro.classList.remove('azul');
    } else {
        quadro.classList.add('azul');
    }
});