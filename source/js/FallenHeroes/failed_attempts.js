var React = require('react');


var FailedAttempts = React.createClass({
  render : function(){
    var message;
    if(this.props.fails == 0){
      message = "You are in Codepicnic";
    }else if (this.props.fails > 0 && this.props.fails <= 10){
      message = "You are a normal student";
    }else if (this.props.fails > 10){
      message = "Congrats! You are Esen!";
    }else {
      message = "How did you manage to fail a negative number of times?";
    }
    return <span className="failed-attempts">{message}</span>; 
  }
  
});

//ReactDOM.render(<FailedAttempts fails={11} />, document.querySelector("#example2") );

module.exports = FailedAttempts;