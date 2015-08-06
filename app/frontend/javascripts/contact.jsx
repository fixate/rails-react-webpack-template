import PrimaryNav from './components/nav/primary'
import ContactPage from './contact/page'

PrimaryNav.mount()

React.render(
  <ContactPage />,
  document.querySelector('.content')
)
