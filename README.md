# Projeto FULLSTACK de rede-social 

Esse projeto será destinado a aprender a como utilizar o Next.js, Node.js, Tailwind e MYSQL,
tecnologias que já tenho conhecimento breve ou intermediário, para criar uma aplicação FULLSTACK.

Canal do youtube do projeto original:
[Clique aqui para acessar](https://www.youtube.com/watch?v=ZfOkWcSulxM&t=1347s&ab_channel=FalksDev)

---

Pasta ***api*** é a pasta destinada ao Node.js(backend) e a pasta ***client*** para a Next.js(frontend)

Libs do Node.js utilizadas no projeto:
- ***express***
- ***bcrypt***
- ***body-parser*** 
- ***cors***
- ***dotenv***
- ***jsonwebtoken***
- ***mysql2***
- ***nodemon***

Inicialização do projeto Node.js e instalação das Libs do Node.js do projeto:
- `cd api` | abra a pasta api
- `npm init -y` | para iniciar o ***package.json***
- `npm i express bcrypt body-parser cors dotenv jsonwebtoken mysql2` | para instalar as libs
- `npm i --save-dev nodemon` | para instalar lib apenas na depedência dev 
- `"type": "module"` | foi adicionado esse código para ter o import ao inves de require

Configurando scripts que podem ser executados usando o npm:
- adicione `"start": "nodemon index.js"` no script para poder executar o código no cmd `npm start`
```json
"scripts": {
    "start": "nodemon index.js"
  },
```
---

Para conseguir um TOKEN aleatório, pode utilizar esse comando:
- executar no cmd: `node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"` depois copie o retorno

Inicialização do projeto Next.js e instalação das libs no front do projeto:
- `cd client` | abra a pasta client
- `npx create-next-app@latest` | para instalar os pacotes e dependecias do Next.js
- `cd nomeDoProjeto` | abra a pasta do nomeDoProjeto 
- `npm i axios` | para instalar as libs do front