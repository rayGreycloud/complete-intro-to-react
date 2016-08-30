
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1(null, this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    // 3 different ways to show instance of MyTitle
    MyTitleFact({ title: 'Props are great!'}),
    React.createElement(MyTitle, { title: 'Use props everywhere!'}),
    ce(MyTitle, { title: 'Props are cool!'})
    // React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
