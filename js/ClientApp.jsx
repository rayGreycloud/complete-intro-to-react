const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { store } = require('./Store')
const { Provider } = require('react-redux')

const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
