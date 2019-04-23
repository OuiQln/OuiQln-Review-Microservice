import React from 'react';
import styled from 'styled-components';
import Histogram from './Histogram';

const RatingContainer = styled.div`
  height: 210px;
  width: 290px;
  display: flex;
  flex-direction: column;
`;

const RatingTitleDiv = styled.div`
  zoom: 1;
  overflow: hidden;
  padding: 0 0 10px 0;
  text-align: center;
`;

const RatingTitleText = styled.span`
  font-family: UniqloPro;
  font-weight: 400;
  text-transform: uppercase;
  color: #000000;
  font-size: 20px;
`;

const HistogramContent = styled.div`
  height: 162px;
  width: 290px;
`;

function RatingDist() {
  return (
    <RatingContainer>
      <RatingTitleDiv>
        <RatingTitleText>rating distribution</RatingTitleText>
      </RatingTitleDiv>
      <HistogramContent>
        <Histogram />
      </HistogramContent>
    </RatingContainer>
  );
}

export default RatingDist;
