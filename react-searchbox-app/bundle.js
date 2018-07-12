'use strict'

const SearchBoxApp = React.createClass({
  getInitialState: function() {
    return {
      searchResults: []
    }
  },
  showResults: function(response){
    this.setState({
      searchResults: response.results
    })
  },
  search: function(URL){
    $.ajax({
      type: "GET",
      dataType: 'jsonp',
      url: URL,
      success: function(response){
        this.showResults(response);
      }.bind(this)
    });
  },
  render: function(){
      return (
        <div>
          <SearchBox search={this.search} />
          <Results searchResults={this.state.searchResults} />
        </div>
      );
  },
});

const SearchBox = React.createClass({
  render: function(){
    return (
      <div>
        <input type="text" ref="query" />
        <select ref="category">
          <option value="software">Apps</option>
          <option value="movie">Films</option>
        </select>
        <input type="submit" onClick={this.createAjax} />
      </div>
    );
  },
  createAjax: function(){
    const query    = ReactDOM.findDOMNode(this.refs.query).value;
    const category = ReactDOM.findDOMNode(this.refs.category).value;
    const URL      = 'https://itunes.apple.com/search?term=' + query +'&country=us&entity=' + category;
    this.props.search(URL)
  }
});

const Results = React.createClass({
  render: function(){
    console.log(this.props.searchResults);
    console.log(this.props.searchResults);
    var resultsItems = this.props.searchResults.map(function(result) {
      return <ResultItem key={result.trackId} trackName={result.trackName} />
    });
    return(
      <ul>{resultsItems}</ul>
    );
  }
});

const ResultItem = React.createClass({
  render: function(){
    return <li>{this.props.trackName}</li>;
  }
});

ReactDOM.render(<SearchBoxApp />,  document.getElementById("app"));
