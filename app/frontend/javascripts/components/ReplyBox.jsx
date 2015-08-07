export default React.createClass({
  propTypes: {
    onUpdate: React.PropTypes.func
  },

  handleTextChange() {
    var text = React.findDOMNode(this.refs.text).value.trim()
    this.props.onUpdate(text);
  },

  render() {
    return (
      <textarea ref="text" onChange={this.handleTextChange} />
    );
  }
});
