import React from 'react';
import styled from 'styled-components';

const WriteReviewContainer = styled.div`
  display: block;
  width: 260px;
  height: 137px;
  text-align: center;
  padding-right: 0;
  font-family: "DIN Next W01 Regular", sans-serif;
`;

const WriteTitle = styled.span`
  display: block;
  padding-bottom: 20px;
  font-size: 20px;
  text-transform: uppercase;
  font-family: "DIN Next W01 Bold"
`;

const WriteP = styled.span`
  font-weight: 400;
`;

const WriteA = styled.a`
  font-size: 14px;
  display: block;
  margin: 20px 55px 0;
  width: 124px;
  height: 20px;
  padding: 6px 10px 5px;
  color: #000;
  border: solid 3px #000;
  text-transform: uppercase;
  line-height: 20px;

  &:hover {
    background-color: red;
    color: white;
    border: solid 3px red;
  }
`;

function WriteAReview() {
  return (
    <WriteReviewContainer>
      <WriteTitle>Write A Review</WriteTitle>
      <WriteP>
Tell us what you think about this product. We value your feedback.
      </WriteP>
      <WriteA>Write a review</WriteA>
    </WriteReviewContainer>
  );
}

export default WriteAReview;
