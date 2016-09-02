const React = require('react')
const { Component } = require('react')

class Details extends Component {
  render () {
    return (
      <div style={{textAlign: 'left'}} className='container'>
        <pre><code>
          {JSON.stringify(this.props.params, null)}
        </code></pre>
      </div>
    )
  }
}
const { object } = React.propTypes

Details.propTypes = {
  params: object
}

module.exports = Details
