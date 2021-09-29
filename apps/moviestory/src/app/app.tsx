import { useEffect, useState } from 'react';
import { Message } from '@moviestory/api-interfaces';
import styled from 'styled-components';

import Select from 'react-select';
import { MovieCardsContainer } from './components/MovieCardsContainer';

import { MovieDataList } from '../app/interfaces/MovieDataList';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Wrapper = styled.div`
  background: #373b44;
  background: radial-gradient(
    57.16% 142.36% at 70.37% 32.78%,
    #44587e 0%,
    #222037 99.03%
  );
  font-family: sans-serif;
`;

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });
  const [movieData, setMovieData] = useState<MovieDataList | undefined>(
    undefined
  );

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=472c2cb1250382eb1bb17a0fd614af0f&language=en-US&page=1'
    )
      .then((r) => r.json())
      .then((movieData) =>
        setMovieData({ results: movieData.results.slice(0, 8) })
      );
  }, []);

  return (
    <>
      <Wrapper style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontFamily: 'cursive' }}>Movie Picks</h2>

        <div style={{ height: '100vh' }}>
          <div style={{ padding: '0 2em' }}>
            <Select options={options} />
          </div>
          <MovieCardsContainer movieData={movieData} />
        </div>
      </Wrapper>
      {/* <div>{m.message}</div> */}
    </>
  );
};

export default App;
