import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
  padding: 1em;
  margin: 1em 0;

  line-height: 1;
  cursor: pointer;

  transition: transform 130ms ease-out;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const ActionButton = ({
  isRemoveFromCollection,
  onClickAction,
  selectedOption,
}) => {
  const handleAction = () => {
    onClickAction(selectedOption);
  };
  return isRemoveFromCollection ? (
    <AddButton onClick={handleAction}>Remove from the Collection</AddButton>
  ) : (
    <AddButton onClick={handleAction}>Add to the Collection</AddButton>
  );
};
