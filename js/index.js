const eye = document.getElementById('eye');
const eyeSlash = document.getElementById('eye-slash');
const email = document.getElementById('iemail');
const fieldPassword = document.getElementById('field-password');

function showPassword() {

    if (eye.style.display === 'none') {
        eye.style.display = 'block'
        eyeSlash.style.display = 'none'
        fieldPassword.type = 'text'
    } else {
        eye.style.display = 'none'
        eyeSlash.style.display = 'block'
        fieldPassword.type = 'password'
    }
}

function verificar() {
    if (email.value === '' || fieldPassword.value === '') {
        alert('[ERRO] Prencha os campos antes de continuar!');
    } else if (email.value === '' || fieldPassword.value.lenght < 6) {
        alert('Verifique se os dados são válidos!');
    } else if (email.value != '' && fieldPassword.value.lenght >= 6) {
        alert('Você está logado!');
    }
}