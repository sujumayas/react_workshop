var React = require('react');

var InstallNode = React.createClass({
  render: function() {
    var message;

    if (this.props.failed) {
      message = "You failed, uninstall Again";
    }
    else {
      message = "Try to Install Node";
    }

    return <button onClick={this.props.onClick} failed={this.props.failed}>{message}</button>;
  }
});

//ReactDOM.render(<MovieLikeButton />, document.querySelector("#example3"));

module.exports = InstallNode;