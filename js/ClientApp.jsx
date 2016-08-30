const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

// const MyFirstComponent = () => {
//   return (
const MyFirstComponent = () => (
  <div>
    <MyTitle title='Title1' color='rebeccapurple' />
    <MyTitle title='Title2' color='papayawhip' />
    <MyTitle title='Title3' color='peru' />
  </div>
)
//  )}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
