import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  flex-basis: 20%;
  display: flex;
  justify-content: center;
`;

const MovieTitle = styled.h1`
  color: black;
`;

export const MovieDetails = ({ selectedOption }) => {
  return (
    <Container>
      <div>
        <MovieTitle>{selectedOption.title}</MovieTitle>
        <div>Year: {selectedOption.release_date}</div>
        <img
          width={200}
          src={`https://image.tmdb.org/t/p/w500/${selectedOption.poster_path}`}
          alt="Movie poster"
        />
        <button style={{ display: 'block', padding: '1em' }}>
          Add to the collection
        </button>
        <h2>hey</h2>
      </div>
    </Container>
  );
};
