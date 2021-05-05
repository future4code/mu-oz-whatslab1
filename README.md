<h2 align="center">WhatsLab</h2>


<h3 align="center">
  <img alt="WhatsLab"
    src="https://github.com/future4code/mu-oz-whatslab1/blob/master/src/images/profiles/Geral.png?raw=true" width="380px"/>
</h3>
<hr/>


## ⚙️ Tecnologias Usadas:
- CSS3
- JavaScript 
- React Js 
- React Components
- Styled Components

## ⚙️ Estrutura do Projeto

- Arquivo `.gitignore`
- Arquivo `package.json`
- Arquivo `package-lock.json`
- Pasta `node_modules`: Armazena os pacotes das dependências que definimos no arquivo package.json. Também deve ser observado que este diretório é definido dentro de .gitignore para que todas as dependências infinitas não sejam carregadas para o repositório Git. Portanto, quem baixar o projeto instalará as dependências [diretamente da web](https://www.npmjs.com/
)
- Pasta `public`: Ele contém os arquivos estáticos que nos permitirão montar o aplicativo.
- Pasta `src` (source): A pasta src é a pasta onde nosso código React está localizado.
## ⚙️ Explicação da Estructura
Este desafio consiste em construir uma pequena aplicação, fizemos inspiradas no WhatsApp, por isso a interfaz vai resultar semelhante.

Contém uma lista de usuários que simulam um contato do WhatsApp e conterão a imagem do perfil e o nome de usuário.

O aplicativo tem também em um filtro de busca, que filtra os membros por nome.

A ideia é que podamos clicar em cada usuário para simular uma interação entre dois pessoas.


## ⚙️ Pasta src ou Source:

- Arquivo Index.js:
Se abrirmos o arquivo index.js. Vamos analisar o conteúdo do arquivo:

*Linha 1:* importe o módulo React que, como vimos, temos dentro das dependências do arquivo package.json e nos permitirá criar interfaces.

*Linha 2:* importe o módulo React-dom que, como vimos, temos dentro das dependências do arquivo package.json e nos permitirá criar interfaces para o navegador / web.

*Linha 3:* temos a importação para App que está chamando o arquivo App.js no diretório src.

*Linha 5:* é aquela usada pelo React e aquela que adiciona o código que falta ao documento HTML (a imagem, o parágrafo e o link). O que ReactDOM.render realmente faz (que eu quero pintar, onde eu quero pintá-lo) é adicionar um componente dentro do elemento do elemento com id "root" de index.html usando a instrução JavaScript document.getElementById ("root") .

- Arquivo App.js:
Se analisarmos o arquivo do App, podemos ver que primeiro que ele resulta o componente pai de todos, onde importamos o React porque ele é o encarregado de desenhar as interfaces.
O esqueleto do componente é um componente funcional (chamado App). Dentro dele temos a importação do arquivo ChatContainer que está chamando o arquivo ChatContainer.js no diretório pages do src.

- Pasta components/container:
Ele vai ser o filho do componente App.js, mas vai ser o pai dos componentes chattile, message, conversation, search, sendinput e whowrites.

- Pasta components / Arquivo chattitle:

- Pasta components / Arquivo message:

- Pasta components / Arquivo search:

- Pasta components / Arquivo sendinput:

- Pasta components / Arquivo whowrites:

- Pasta images:


##  Instalação


## 🏁 Para rodar o projeto:

Clone este repositório em sua máquina:

```bash
$ git clone https://github.com/future4code/mu-oz-whatslab1.git
```

cd `mu-oz-whatslab1` e rode:

```bash
npm install
```

para iniciar:

```bash
npm run start
```

<br/>

##  Conclusão



P.D. Pode ver um prototipo deste aplicativo no seguinte endereço:
![](chat.gif)


Atenciosamente,

Gremis Tovar e Jeane Melo