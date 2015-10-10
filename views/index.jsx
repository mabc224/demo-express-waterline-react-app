var React = require('react');

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name} <br />
    {this.props.email}</div>;
  }
});

module.exports = HelloMessage;