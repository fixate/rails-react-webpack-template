import Router, { Route } from 'react-router';

import App from './home/App';
import Index from './home/Index';
import Message from './home/Message';

let routes = (
  <Route handler={App}>
    <Route name="home" path="/" handler={Index} />
    <Route name="messages" path="messages/:id" handler={Message} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(
    <Root />,
    document.getElementById('main')
  )
});
