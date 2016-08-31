const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Search = React.createClass({
  getInitialState() {
    return {
      searchTerm: 'this is the search term'
    }
  },
  handleSearchTermEvent(event) {
    this.setState({ searchTerm: event.target.value})
  },
  render() {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>sVideo</h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {data.shows.map((show) => (
            <ShowCard key={show.imdbID} {...show} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
