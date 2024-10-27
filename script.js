const apiKey = '01914d584aa9f458015e91c7ffe26d1db0f2c';
const apiUrl = 'https://sistemaconcurso-918a.restdb.io/rest/users?max=2';

// Função para cadastrar um novo usuário
function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const user = {
        username: username,
        password: password,
        role: role
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': apiKey
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        alert('Cadastro realizado com sucesso!');
    })
    .catch(error => console.error('Erro ao cadastrar:', error));
}

// Função para login do usuário
function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    fetch(`${apiUrl}?q={"username": "${loginUsername}", "password": "${loginPassword}"}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            const user = data[0];
            if (user.role === 'administrador') {
                alert('Bem-vindo, administrador!');
                // Redirecionar para o portal do administrador
            } else {
                alert('Bem-vindo, candidato!');
                // Redirecionar para o portal do candidato
            }
        } else {
            alert('Usuário ou senha incorretos.');
        }
    })
    .catch(error => console.error('Erro ao fazer login:', error));
}

