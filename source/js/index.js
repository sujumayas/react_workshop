var React = require('react'),
  ReactDOM = require('react-dom');


var InputText = React.createClass({
	handle : function(e){
		this.props.text = e.target.value;
	},
	render: function(){
		return (
			<input type="text" placeholder="prueba de proptypes"  value={this.props.texto} onChange={this.handle}/>
		);
	}
});

InputText.propTypes = {
	texto : React.PropTypes.string.isRequired,
};







ReactDOM.render(<InputText lifeIs="Cycle" texto="default" />, document.querySelector('#app'));