import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import UniqloPro from '../assets/fonts/UniqloPro.ttf';

import RatingDist from './RatingDist';
import WriteAReview from './WriteAReview';
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

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: UniqloPro;
  src: url(${UniqloPro}) format('truetype');
  font-style: normal;
  font-weight: 100;
}
`;

const ReviewStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

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
        <ReviewStatsContainer>
          <RatingDist />
          <WriteAReview />
        </ReviewStatsContainer>
      </>
    );
  }
}

export default App;
