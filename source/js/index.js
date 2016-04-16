var React = require('react'),
  ReactDOM = require('react-dom');

//TAREA: 
// Utilizar refs para aplicar biblioteca o librería de Jquery. 
// Siguiente clase: proptypes & Testing
// 

var Lifecycle = React.createClass({
  // Sets initial state
  getInitialState: function(){
      return {state1 : 'Life', state2: "white", state3: "olo"};
  },
  //Sets initial props (overriden by anything passed from parent component call)
  getDefaultProps: function() {
      return { lifeIs: 'Cycle'};
  },
  // Will be executed before the components mount
  componentWillMount: function() {
      console.log('componentWillMount', arguments);
  },
  // Will be executed after the component mount
  componentDidMount: function(prevProps, prevState) {
      console.log('componentDidMount', arguments);  
      var self = this;

      setTimeout(function(){
        self.setState({state1 : 'Life has been...'});
      }, 2500);

      setTimeout(function(){
        ReactDOM.render(<Lifecycle lifeIs="Recycle"/>, document.querySelector('#app'));
      }, 1500);

  },
  componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps', arguments);
  },
  shouldComponentUpdate: function() {
        //var go = confirm("Are you sure you want to change '"+this.state.state1+"' for '"+arguments[1].state1+"' ??");
        var go  = true;
        if(go){
          return true;
        }else{
          return false;
        }
        // console.log(this.state.state1);
        // console.log('shouldComponentUpdate', arguments);
        return true;
  },
  componentWillUpdate: function() {
        console.log('componentWillUpdate', arguments);
  },
  componentDidUpdate: function() {
        console.log('componentDidUpdate', arguments);
  },
  hover: function(){
    console.log("hover");
    this.setState({state1: "Touching Life is not permitted!", state2: "red"});
    this.refs.olo.innerHTML = "NOT OLO!!";
    //You can do this with Jquery like : $(this.refs.olo).hide();
  },
  hoverEnd: function(){
    console.log("hoverEnd");
    this.setState({state1: "Life", state2: "white"});
  },
  render : function(){
    var backgroundColor = {backgroundColor : this.state.state2};
    var message = this.state.state3; 
    return (
      <ul onMouseEnter={this.hover} onMouseLeave={this.hoverEnd} style={backgroundColor}>
        <li>
          {this.state.state1}
        </li>
        <li>{this.props.lifeIs}</li>
        <span ref="olo">{message}</span>
      </ul>
    );
  }
});


ReactDOM.render(<Lifecycle lifeIs="Cycle" />, document.querySelector('#app'));