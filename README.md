# ReactJS_Build10P_Sezione3

Sezione 3 del corso

In questa sezione vediamo come creare una propria classe React. A differenza della sezione precedente, dove abbiamo usato React.createClass, qui non abbiamo il getInitialState, ma dobbiamo usare il costruttore per specificare lo stato iniziale della nostra classe. Inoltre, un'altra differenza, è che propTypes e getDefaultProps sono definite come proprietà all'interno del costruttore e non all'interno del body della classe:
```js
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
