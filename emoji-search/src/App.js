import React, { Component } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import filterEmoji from './FilterEmoji';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //filteredEmoji: filterEmoji('', 40),
      filteredEmoji: filterEmoji('', 10),
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 40),
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}