// Minha resolução - só funciona utilizando o id do HTML
/*
const inputVazio = document.getElementById('input-vazio')

inputVazio.addEventListener('input', () => {
    if (inputVazio.value.trim() === '') {
        inputVazio.classList.remove('borda-verde')
    } else {
        inputVazio.classList.add('borda-verde')
    }
})

*/

// Correção do curso

const inputVazio = document.querySelectorAll(".input-vazio");

inputVazio.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("borda-verde");
        } else {
            input.classList.remove("borda-verde")
        }
    });
});