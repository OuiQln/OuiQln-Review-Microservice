import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: 'hello world',
    };
  }

  render() {
    const { string } = this.state;
    return (
      <div>
        {string}
      </div>
    );
  }
}

export default App;
