# botDiscordCupula

Projeto pessoal de um bot para Discord, desenvolvido na pasta `glorp/`.

O bot foi feito para automatizar tarefas do servidor, responder eventos, gerenciar comandos internos e manter integrações que ajudam na organização da comunidade.

## O que o bot faz

- Gerencia eventos de entrada, saída e atualização de membros.
- Trabalha com mensagens e reações para automações do servidor.
- Possui comandos para criação de cargos e painel do Minecraft.
- Exibe e atualiza informações relacionadas ao status do servidor Minecraft.
- Usa um arquivo de configuração com os IDs e canais necessários para funcionar corretamente.

## Tecnologias e bibliotecas

- Node.js
- npm
- discord.js
- dotenv
- minecraft-server-util
- PM2 para manter o bot rodando em segundo plano

## Estrutura do projeto

- `glorp/index.js`: ponto de entrada do bot
- `glorp/commands/`: comandos do bot
- `glorp/events/`: eventos e automações
- `glorp/utils/`: utilitários internos
- `glorp/config.json`: IDs, canais e dados de configuração
- `glorp/.env`: variáveis sensíveis locais, como o token do bot

## Como executar

1. Entre na pasta do projeto:

   ```bash
   cd glorp
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie o arquivo `.env` com base no exemplo:

   ```bash
   copy .env.example .env
   ```

4. Preencha o token do bot no arquivo `.env`:

   ```env
   TOKEN=seu_token_aqui
   ```

5. Confira se os valores em `config.json` estão corretos para o seu servidor.

6. Inicie o bot com o comando configurado no seu ambiente.

## Usando PM2

O PM2 é o que eu uso para manter o bot online mesmo quando o VS Code é fechado e para reiniciar o processo automaticamente quando o computador liga.

### Instalar o PM2

```bash
npm install -g pm2
```

### Iniciar o bot com PM2

```bash
pm2 start index.js --name glorp
```

### Verificar processos

```bash
pm2 list
```

### Reiniciar o bot

```bash
pm2 restart glorp
```

### Salvar a lista de processos

Depois de iniciar o bot com PM2, salve a configuração atual:

```bash
pm2 save
```

### Iniciar junto com o Windows

Para o bot subir automaticamente quando o PC ligar, configure o startup do PM2 no sistema e mantenha os processos salvos.

## Observação importante

Se o token do bot já foi exposto em algum lugar, gere um novo token no Discord Developer Portal antes de continuar usando o projeto.
