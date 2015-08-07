import ReplyBox from '../components/ReplyBox'

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};
  }

  render() {
    return (
      <div>
        <p>Message id {this.props.params.id}</p>
        <ReplyBox onUpdate={(value) => this.setState({message: value})} />
        <pre>{this.state.message}</pre>
      </div>
    );
  }
}

export default Message;
