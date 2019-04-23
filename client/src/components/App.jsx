import React, { Component } from 'react';
import { GlobalStyle, StyledP, WriteRevBox } from './elements';

/*
  This app needs tho display three components
  and store all of the data for the reviews section
  including:
    -reviews
    -stats data for reviews
      -total reviews
      -avg star rating 0_0 - 5_0
      -avg fit 1_0 - 5_ 0
      -avg length 1_0 - 5_ 0
      -avg quality 1_0 - 5_ 0
      -star rating breakdown
      -size breakdown
      -age breakdown
      -height breakdown
      */

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
      <>
        <GlobalStyle />
        <div>
          <StyledP>{string}</StyledP>
        </div>
        <WriteRevBox>Hello World</WriteRevBox>
      </>
    );
  }
}

export default App;
