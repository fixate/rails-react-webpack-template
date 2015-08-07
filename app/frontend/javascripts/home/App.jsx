import Router from 'react-router'
import PrimaryNav from '../components/PrimaryNav'

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Menu</p>
        <PrimaryNav />
        <Router.RouteHandler />
      </div>
    );
  }
}

export default App;
