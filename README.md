# ReactJS_Build10P_Sezione3

Sezione 3 del corso

In questa sezione vediamo come creare una propria classe React. A differenza della sezione precedente, dove abbiamo usato React.createClass, qui non abbiamo il getInitialState, ma dobbiamo usare il costruttore per specificare lo stato iniziale della nostra classe. Inoltre, un'altra differenza, è che propTypes e getDefaultProps sono definite come proprietà all'interno del costruttore e non all'interno del body della classe:

```javascript
var Navbar = React.createClass({
    // propTypes va scritto con la lettera minuscola!
    propTypes: {
      brand:React.PropTypes.string.isRequired
    },
    getInitialState: function(){
      return{
        //...
      }
    },
    getDefaultProps: function(){
      return {
        brand: 'My Website Name',
        color: 'light'
      }
    },
    // la sola funzione richiesta per un componente React è la render
    render: function(){
    }
```

Successivamente andiamo ad impostare una nuova applicazione developer su github: http://github.com/settings/developers.

Poi install con npm (se non ho npm installo node!!!):

npm install webpack -g
npm install webpack-dev-server -g

Ora creo un file package.json tramite npm init, inserendo alcune informazioni.
Apro il file package.json e aggiungo le devDependencies, cioè quei moduli che andrò ad usare solo in ambiente di sviluppo e non in produzione:

```
"devDependencies":{
  "babel-core":"5.8.*",
  "babel-loader":"5.3.*",
  "webpack":"1.12.*"
},
"dependencies":{
  "react":"^0.14.7",
  "react-dom":"^0.14.7"
}
```

Avvio npm install.

Ora creo un file template, che va bene anche per altri progetti: webpack.config.js

Leggi: https://webpack.github.io/docs/configuration.html
https://web-design-weekly.com/2014/09/24/diving-webpack/
http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
http://survivejs.com/webpack_react/developing_with_webpack/

Vado ad inserire l'_entry_, cioè il file javascript che andiamo a creare e che verrà compilato.
L'output sarà il file compilato e che andremo a mettere in app/js.

```js
module.exports = {
  // L'entry mi individua il file js da caricare
  entry: [
    './src/index.js'
  ],
  // L'output è il file che mi verrà creato da webpack
  output:{
    path: __dirname,
    filename: 'app/js/main.js'
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}
```

Creo la struttura del progetto, partendo dalle due cartelle di base app e src:

/app
/app/css
/app/js
/app/js/index.html
/src
/src/components
/src/index.js

La cartella src/components è dove andrò a mettere i miei componenti React.

in questo index.js metto un alert di prova
mentre in index.html scriverò:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My GitHub</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="js/main.js"></script>
  </body>
</html>

In src creo il file entry index.js con una semplice istruzione alert('It\'s works')

```

Il file main.js spesso viene chiamato bundle.js. In pratica è il file js che conterrà tutti i file js necessari a cui ho fatto la require, cioè i moduli richiesti.
Ora proviamo a lanciare il nostro webpack-dev-server dalla command line, dovremmo ottenere una frase che dice:
```
Version: webpack 1.12.15
Time: 584ms
         Asset     Size  Chunks             Chunk Names
app/js/main.js  1.54 kB       0  [emitted]  main
chunk    {0} app/js/main.js (main) 62 bytes [rendered]
    [0] multi main 28 bytes {0} [built]
    [1] ./src/index.js 34 bytes {0} [built]
webpack: bundle is now VALID.
```

Apro il browser e scrivo:

http://localhost:8080/app

Apreno il sorgente trovo:

```javascript

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My GitHub</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="js/main.js"></script>
  </body>
</html>
```

Ovvero il file script main.js, output del mio entry point. Se lo apro, trovo tutto il javascript che è stato creato.

Tornando al file entry index.js, cancello la alert e andiamo ad importare i moduli di React e i miei moduli, la convenzione vuole che si usi la prima lettera maiusola per differenziarli dagli altri script:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

In src/components creo il file App.jsx, cioè il mio componente. Qui trovo la mia classe App che estende Components. Questa classe avrà la funzione render().

Preleviamo Bootstrap. Prendiamo il file bootstrap.css e lo inseriamo in app/css. Poi dagli "Starter Template" di Bootstrap, preleviamo il codice di una navigation bar, a cui andiamo a sostituire la classe con navbar navbar-default e togliamo i componenti <ul>.
Inseriamo nell'head il collegamento al css di bootstrap e ad un nostro foglio di stile, che creiamo sempre in app/css/style.css

A questo punto se faccio il refresh della pagina ho la mia app con la nav bar.

Andiamo a sistemare il nostro div, wrappandolo in questa maniera:

```
  <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="app"></div>
        </div>
      </diiv>
  </div>
```

In components vado a creare una cartella chiamata github, in quanto ogni gruppo di componenti avrà la sua cartella, in cui creiamo 4 file: Profile.jsx, RepoList.jsx, Search.jsx e Repo.jsx. Ho 4 componenti dell'applicazione.

In App.jsx andiamo a definire il costruttore.
