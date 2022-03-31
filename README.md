# Trace-Pack

## Antes de começar a desenvolver

1. Clone o repositório:

- `git clone git@github.com:JEFERSON-CASAGRANDE/Trace-Pack.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd Trace-Pack`
- Crie uma nova branch.
 `git checkout -b nome-da-sua-branch`
2. Instale as dependências de cada aplicação:
  - `cd front-end/`
  - `npm install`
  
  - `cd ..`
  
  - `cd back-end/`
  - `npm install`
  

3. Rode cada aplicação: 
  - `cd front-end/`
  - `npm start`
  
Executa o aplicativo no modo de desenvolvimento.
Abra http://localhost:3000 para visualizá-lo em seu navegador.


- Em um novo terminal
- `cd back-end/`
- `npm run dev`

O servidor deve rodar na porta 3001

- Obs: O banco utilizado no projeto é MongoDB, verifique se a conexão com o mesmo está estabelecida,
no banco crie um database com o nome `TracePack` e dentro dele as collections `users` e `features`
