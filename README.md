# botDiscordCupula

Projeto do bot Discord na pasta `glorp/`.

## Estrutura

- `glorp/index.js`: ponto de entrada do bot
- `glorp/commands/`: comandos do bot
- `glorp/events/`: eventos do Discord e integrações auxiliares
- `glorp/utils/`: utilitários internos
- `glorp/config.json`: IDs e configurações do servidor

## Requisitos

- Node.js 18+ recomendado
- npm

## Configuração

1. Entre na pasta do projeto:

   ```bash
   cd glorp
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie o arquivo `.env` a partir do exemplo:

   ```bash
   copy .env.example .env
   ```

4. Preencha o token do bot em `.env`:

   ```env
   TOKEN=seu_token_aqui
   ```

5. Verifique se os IDs em `config.json` estão corretos para o seu servidor.

## Execução

Dentro da pasta `glorp/`, inicie o bot com o comando definido no seu ambiente atual. Se você usa PM2, mantenha a instalação e o processo apontando para `glorp/index.js`.

## Publicação no GitHub

Antes do primeiro push, confirme que estes itens não serão enviados ao repositório:

- `glorp/.env`
- qualquer pasta `node_modules/`

Fluxo sugerido:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```

## Observação de segurança

Se o token do bot já apareceu em algum lugar fora do `.env` local, gere um novo token no Discord Developer Portal antes de publicar.
