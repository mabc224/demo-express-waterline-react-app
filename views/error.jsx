var React = require('react');

var ErrorMessage = React.createClass({
  render: function() {
    return <div>Error {this.props.error} <br />
    {this.props.message}</div>;
  }
});

module.exports = ErrorMessage;
