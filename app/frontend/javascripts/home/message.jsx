class Message extends React.Component {
  render() {
    return (
        <p>Message id {this.props.params.id}</p>
    );
  }
}

export default Message;
