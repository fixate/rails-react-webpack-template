import { Link, State } from 'react-router';

class PrimaryNav extends React.Component {
  render() {
    return (
        <nav>
          <ul>{this.renderNavItems()}</ul>
        </nav>
    );
  }

  renderNavItems() {
    return [
      <li><Link to="home">Home</Link></li>,
      <li><Link to="messages" params={{id: 5}}>Message</Link></li>,
    ];
  }
}

export default PrimaryNav
