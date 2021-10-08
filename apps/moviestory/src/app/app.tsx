import { useEffect, useState } from 'react';
import { Message } from '@moviestory/api-interfaces';
import styled from 'styled-components';

import AsyncSelect from 'react-select/async';
import { MovieCardsContainer } from './components/MovieCardsContainer';
import { MovieDetails } from './components/MovieDetails';

import { MovieDataList } from '../app/interfaces/MovieDataList';
import { MovieDataType } from '../app/interfaces/MovieDataType';

import { debounce } from 'lodash';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Wrapper = styled.div`
  background: radial-gradient(
    57.16% 142.36% at 70.37% 32.78%,
    #44587e 0%,
    #222037 99.03%
  );
  font-family: sans-serif;
`;

// interface State {
//   readonly inputValue: string;
// }

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });
  const [movieData, setMovieData] = useState<MovieDataList | undefined>(
    undefined
  );

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedOption, setSelectedOption] = useState({});
  const [searchedMovies, setSearchedMovies] = useState<MovieDataType[]>();

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=472c2cb1250382eb1bb17a0fd614af0f&language=en-US&page=1'
    )
      .then((r) => r.json())
      .then((movieData) =>
        setMovieData({ results: movieData.results.slice(0, 8) })
      );
  }, []);

  const handleInputChange = (newValue: string) => {
    // const inputValue = newValue.replace(/\W/g, '');
    setSelectedValue(newValue);
    return newValue;
  };

  const loadMovies = (inputValue: string) => {
    // console.log(inputValue);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=472c2cb1250382eb1bb17a0fd614af0f&query=${inputValue}`
    )
      .then((r) => r.json())
      .then((movieData) => setSearchedMovies(movieData.results))
      .catch((error) => console.log(error));
    // console.log(searchedMovies);
    return searchedMovies;
  };

  const loadOptions = (inputValue: string, callback: (newoptions) => void) => {
    callback(loadMovies(inputValue));
  };

  const onHandleChange = (newOption) => {
    setSelectedOption(newOption);
    setSelectedValue(newOption.title);
  };

  return (
    <>
      <Wrapper>
        <h2 style={{ color: '#fff', fontFamily: 'cursive' }}>
          Movie Picks - {selectedValue}
        </h2>

        <div style={{ height: '100vh' }}>
          <div style={{ padding: '0 2em' }}>
            <AsyncSelect
              value={selectedValue}
              loadOptions={loadOptions}
              onInputChange={handleInputChange}
              onChange={onHandleChange}
              defaultOptions
              getOptionValue={(option) => option.title}
              getOptionLabel={(option) => option.title}
            />
          </div>
          <div style={{ display: 'flex', marginTop: '1em' }}>
            <MovieCardsContainer movieData={movieData?.results} />
            <MovieDetails selectedOption={selectedOption} />
          </div>
        </div>
      </Wrapper>
      {/* <div>{m.message}</div> */}
    </>
  );
};

export default App;
