const inputVazio = document.getElementById('inputvazio')

inputVazio.addEventListener('input', () => {
    if (inputVazio.value.trim() === '') {
        inputVazio.classList.remove('borda-verde')
    } else {
        inputVazio.classList.add('borda-verde')
    }
})