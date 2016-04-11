var React = require('react');

var HelloComponent = React.createClass({
  render : function(){
    return (
      <div className={"user-"+this.props.name}>
        <span>Hola {this.props.name}</span>
        <img src={this.props.url} />
        <span>You have failed {this.props.fails}</span>
      </div>
      );
  }
});

//Esto ya no
//ReactDOM.render(<HelloComponent name="Pepito"/>, document.querySelector("#example1"));

module.exports = HelloComponent;