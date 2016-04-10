var React = require('react'),
	ReactDom = require('react-dom');


var HelloComponent = createClass({
	render : function (){
		return <div>Hola {this.props.name}</div>;
	}
});