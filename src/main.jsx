var React = require('react');
var ReactDOM = require('react-dom');
//var ListManager = require('./components/ListManager.jsx');
var Routes = require('./Routes.jsx');

//ReactDOM.render(<ListManager title="HeyHey" />, document.getElementById('ingredients'));
//ReactDOM.render(<ListManager headingColor="#b31217" title="KK" />, document.getElementById('ingredients1'));
//ReactDOM.render(<ListManager title="cc" />, document.getElementById('ingredients2'));

ReactDOM.render(Routes , document.getElementById('main'));
