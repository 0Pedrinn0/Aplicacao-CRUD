# Resumo do Projeto
Uma aplicação CRUD completa que permite o gerenciamento e cadastro de usuários. O sistema realiza as quatro operações fundamentais de persistência de dados: Create (Criar), Read (Ler), Update (Atualizar) e Delete (Deletar).

# Arquitetura e fluxo de dados
O projeto segue a arquitetura Cliente-Servidor (Client-Server), onde o Front-end e o Back-end estão se comunicando via API REST.

## Front-end (A Interface):
Tecnologias: HTML5, CSS3, JavaScript (Vanilla).

Design: Tema escuro ("Dark Mode") com destaques em verde neon, responsivo via Flexbox.

## Back-end (A Lógica):
Tecnologias: Node.js, Express.

## Banco de Dados (A Memória):
Tecnologia: MySQL.

Estrutura: Tabela tb_usuario com colunas para ID, nome, senha e email.

# Guia de Uso: Sistema Gerenciador de Usuários (CRUD)
Este projeto é uma aplicação Fullstack para gerenciamento de usuários, permitindo Cadastrar, Listar, Editar e Excluir registros.

## Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

**Node.js** (v14 ou superior)

**MySQL Server** (ou XAMPP/WAMP)

**Git** (Opcional, para clonar o repositório)

## Passo 1: Configuração do Banco de Dados
O sistema precisa de um banco de dados para funcionar.

1. Abra seu gerenciador de banco de dados (MySQL Workbench, DBeaver, phpMyAdmin, ou Terminal).

2. Copie o código do arquivo Banco de dados.sql.

3. Execute o script para criar o banco db_registro e a tabela tb_usuario.

⚠️ **Atenção:** Verifique o arquivo `server.js`. Ele está configurado para conectar com a senha `"12345"`. Se a senha do seu MySQL for diferente, altere a linha `password: "12345"` no `server.js`.

## Passo 2: Instalação e Back-end
Vamos colocar o servidor (API) para rodar.

Abra o terminal na pasta raiz do projeto.

Instale as dependências do projeto:
```
npm install express mysql2 cors
```
Inicie o servidor:
```
node backend/server.js
```

Se tudo der certo, o terminal ficará aguardando requisições na porta 3000.

## Passo 3: Utilizando o Sistema (Front-end)
Agora que o servidor está rodando, abra o arquivo index.html no seu navegador (ou use a extensão "Live Server" do VS Code).

### 1. Navegação Inicial
- A tela Home (index.html) serve como menu principal.

- Clique em **"Cadastrar"** para inserir novo usuário ou **"Usuarios"** para ver a lista.

### 2. Cadastrar Usuário

- Na tela de cadastro, preencha Usuário, Senha e Email.

- Clique em **"Registrar"**.

- Um alerta confirmará: "Usuário cadastrado com sucesso!".

- O formulário será limpo automaticamente.

### 3. Listar Usuários
- Acesse a página de Usuários.

- O sistema carregará automaticamente todos os registros do banco de dados.

- Cada cartão exibe: ID, Nome, Senha e Email.

### 4. Editar Usuário
1. Na lista de usuários, clique no botão **"Editar Usuário"** no cartão desejado.

2. Uma janela (prompt) aparecerá perguntando o que deseja alterar:

3. Digite `1` para mudar o Nome.

4. Digite `2` para mudar a Senha.

5. Digite `3` para mudar o Email.

6. Em seguida, digite o novo valor.

7. O sistema confirmará a atualização e recarregará a página com o dado novo.

### 5. Deletar Usuário
- Clique no botão vermelho **"Deletar Usuário"**.

- Confirme a ação na janela que aparecerá: "Tem certeza que deseja excluir...?".

- O usuário será removido permanentemente do banco e sumirá da lista.