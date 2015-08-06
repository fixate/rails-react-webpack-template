class PrimaryNav extends React.Component {
  render() {
    return (
        <div>NAV</div>
    );
  }

  static mount(selector = 'nav') {
    React.render(
      <PrimaryNav />,
      document.querySelector(selector)
    )
  }
}

export default PrimaryNav
