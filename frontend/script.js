const page = window.location.href.split('/').pop();
if (page === 'usuarios.html') {
    fetch("http://localhost:3000/usuario")
        .then(res => res.json())
        .then(lista => {
            const info = document.getElementById("usuarioList");
            info.innerHTML = lista.length > 0 ? lista.map(x => {
                const idAtual = x.id ?? x.id_usuario;
                return`
                <div class="usuarioInfo">
                    <strong>ID:</strong> <span>${x.id ?? x.id_usuario}</span><br>
                    <strong>Nome:</strong> <span>${x.nome_usuario ?? x.nome}</span><br>
                    <strong>Senha:</strong> <span>${x.senha_usuario ?? x.senha}</span><br>
                    <strong>Email:</strong> <span>${x.email_usuario ?? x.email}</span><br>
                    <button class="button" onclick="deletarUsuario(${idAtual})">Deletar Usuário</button>
                    <button class="button" onclick="editarUsuario(${idAtual})">Editar Usuário</button>
                </div>`
            }).join('') : "Nenhum usuario encontrado!";
        })
        .catch(err => alert('Erro ao buscar usuário: ' + err.message));
};

async function deletarUsuario(id) {
    if (!confirm(`Tem certeza que deseja excluir o usuário com ID: ${id}?`)) {
        return;
    }

    try {
        const resposta = await fetch(`http://localhost:3000/usuario/${id}`, {
            method: 'DELETE'
        });

        if (resposta.ok) {
            alert(`Usuário com ID ${id} excluído com sucesso!`);
            location.reload();
        } else {
            const erro = await resposta.json();
            alert(`Falha: ${erro.message}`);
        }
    } catch (error) {
        alert('Erro de rede ou na API: ' + error.message);
    }
}

async function editarUsuario(id) {
    let escolha = prompt(`Oq você quer alterar: 
        1 = Nome de usuário 
        2 = Senha 
        3 = Email`);
        if (escolha === null || escolha === '') return;

        let coluna, novoValor;

        if (escolha == 1) {
            coluna = 'nome_usuario';
            novoValor = prompt("Digite o novo nome de usuário.");
            if (novoValor === null || novoValor === '') return;
        }
        else if (escolha == 2) {
            coluna = 'senha_usuario';
            novoValor = prompt("Digite a nova senha do usuário.");
            if (novoValor === null || novoValor === '') return;
        }
        else if (escolha == 3) {
            coluna = 'email_usuario';
            novoValor = prompt("Digite o novo email do usuário.");
            if (novoValor === null || novoValor === '') return;
        }
        else {
            alert('Opção inválida!');
            return;
        }
            try {
            const response = await fetch(`http://localhost:3000/usuario/editar/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ [coluna]: novoValor })
            });

            if (response.ok) {
                alert('Usuário atualizado com sucesso!');
                location.reload();
            } else {
                alert('Erro ao atualizar usuário.');
            }
        }
        catch (error) {
            console.error('Erro ao editar item:', error);
            alert('Erro ao editar item');
        }
    }

if (page === 'cadastrar.html') {
    document.getElementById('registroForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:3000/cadastrar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                this.reset();
            }
        }
        catch (error) {
            alert("Erro ao cadastrar o usuário: " + error.message);
        }
    });
}

