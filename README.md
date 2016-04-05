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
    // la sola funzione rechiesta per un componente React è la render
    render: function(){
    }
```

Successivamente andiamo ad impostare una applicazione developer su github: http://github.com/settings/developers.

Poi install con npm:

npm install webpack -g
npm install webpack-dev-server -g

Ora creo un file package.json tramite npm init, inserendo alcune informazioni.
Apro il file package.json e aggiungo le devDependencies, cioè quei moduli che andrò ad usare solo in ambiente di sviluppo e non in produzione:

```json
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

Creo la struttura del progetto:

/app
/app/css
/app/js
/app/js/index.html
/src
/src/components
/src/index.js

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
```
