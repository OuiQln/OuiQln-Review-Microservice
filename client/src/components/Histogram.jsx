import React from 'react';
import styled from 'styled-components';

const HistContainer = styled.div`
  margin-bottom: 8px;
  overflow: hidden;
  zoom: 1;
  position: relative;
  width: 100%;
  height: 26px;
`;

const HistLabel = styled.span`
  width: 50px;
  font-size: 12px;
  color: #636262;
  line-height: 20px;
  float: left;
  text-transform: uppercase;
  font-family: Trebuchet MS, sans-serif;
`;

const HistBar = styled.div`
  background-color: #f2f2f2;
  float: left;
  overflow: hidden;
  margin-top: 5px;
  width: 180px;
`;

const HistFullBar = styled.div`
  width: ${props => props.width || '50%'};
  height: 10px;
  background-color: #000;
`;

const HistNumLabel = styled.span`
  top: -3px;
  padding-left: 15px;
  color: #636262;
  font-size: 20px;
  position: relative;
  line-height: normal;
  font-family: Trebuchet MS, sans-serif;
`;

function Histogram({ label, numReviews, totalReviews }) {
  const width = `${(numReviews / totalReviews) * 100}%`;
  return (
    <HistContainer>
      <HistLabel>5 Star</HistLabel>
      <HistBar>
        <HistFullBar />
      </HistBar>
      <HistNumLabel>22</HistNumLabel>
    </HistContainer>
  );
}

export default Histogram;
