
var div = React.DOM.div
var h1 = React.DOM.h1

var MyFirstComponent = (
  div(null,
    h1(null, 'This is the first component')
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
