import * as React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';
const TopButtonForCard = styled.button`
  padding: 0.5em;

  margin-right: 2px;
  display: block;
  transition: transform 130ms ease-out;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const TopButton = ({ btnNumber, setNumberOfCards }) => {
  let emojiValue;

  if (btnNumber === 8) {
    emojiValue = <Emoji symbol={'🥇'} label="Gold Medal emoji" />;
  } else if (btnNumber === 6) {
    emojiValue = <Emoji symbol={'🥈'} label="Silver Medal emoji" />;
  } else {
    emojiValue = <Emoji symbol={'🥉'} label="Bronze Medal emoji" />;
  }
  return (
    <TopButtonForCard onClick={() => setNumberOfCards(btnNumber)}>
      TOP {btnNumber} {emojiValue}
    </TopButtonForCard>
  );
};
