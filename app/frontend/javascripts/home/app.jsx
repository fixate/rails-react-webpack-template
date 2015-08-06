import Router from 'react-router'
let RouteHandler = Router.RouteHandler;

class App extends React.Component {
  render() {
    return (
      <div>
        <p>APP</p>
        <RouteHandler />
      </div>
    );
  }
}

export default App;
