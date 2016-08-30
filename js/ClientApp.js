/* global React ReactDOM */
var div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    // 3 different ways to show instance of MyTitle
    MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'Props are cool!', color: 'peru'})
    // React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
