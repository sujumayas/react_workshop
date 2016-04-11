var React = require('react');

var HelloComponent = React.createClass({
  render : function(){
  	console.log(this);
  	var tempUrl = this.props.url ? this.props.url : "https://uploads.teamtreehouse.com/production/profile-photos/303862/thumb_foto_perfil.jpg";
    return (
	      <div 
		      data-id={this.props.theKey} 
		      key={this.props.theKey}
		      draggable={this.props.draggable} 
		      onDragEnd={this.props.onDragEnd}
		      onDragStart={this.props.onDragStart} 
		      className={"user-component user-"+this.props.name}
	      >
        <img className="user-image" src={tempUrl} />
        <span className="user-hello">Hola {this.props.name}</span>
      </div>
      );
  }
});

//Esto ya no
//ReactDOM.render(<HelloComponent name="Pepito"/>, document.querySelector("#example1"));

module.exports = HelloComponent;