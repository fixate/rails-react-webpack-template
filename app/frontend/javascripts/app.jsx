import PrimaryNav from './components/nav/primary'
import Router, { Route } from 'react-router'
import App from './home/app';
import Index from './home/index';
import Message from './home/message';

PrimaryNav.mount();

let routes = (
  <Route handler={App}>
    <Route path="/" handler={Index} />
    <Route path="messages/:id" handler={Message} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(
    <Root />,
    document.querySelector('body .content')
  )
});
