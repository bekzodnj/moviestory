import styled from 'styled-components';
export const withHover = styled.div`
  transition: transform 130ms ease-out;
  &:hover {
    opacity: 0.8;
    cursor: grab;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.5;
  }
`;
