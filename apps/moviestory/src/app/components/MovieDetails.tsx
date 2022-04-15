import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ActionButton } from './common/ActionButton';
import { device } from './common/Constants';
import { withHover } from './common-styles/withHover';
import { MovieDetailsType } from '../interfaces/MovieDetailsType';

const Container = styled.div`
  background-color: #0c0b10;
  font-family: 'Raleway', sans-serif;
  color: white;
  flex-basis: 40%;
  display: flex;
  justify-content: center;
  padding: 1em 2em;
  transition: padding linear 0.2s;

  @media ${device.laptop} {
    padding: 2em 3em;
  }
`;

const MovieTextBlock = styled.div`
  margin-bottom: 10px; ;
`;

const MovieTextBlockSecondary = styled.p`
  color: #ffffffb0;
`;

const MovieTitle = styled.h1`
  // <h1> remove default padding, margin
  padding: 0;
  margin: 0rem;

  color: white;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

const MovieDescription = styled.div`
  color: #ffffffe3;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 24px;
  text-align: justify;
  font-size: 1em;
`;

const MovieGeneralInfo = styled.div`
  font-size: 1em;
  margin-bottom: 1rem;
`;
const MoviePosterAndInfo = styled.div`
  display: flex;
`;

export const MovieDetails = ({
  selectedOption,
  setPickedMovies,
  pickedMovies,
}) => {
  const [isMoviePicked, setIsMoviePicked] = useState(false);

  useEffect(() => {
    const isMovieSelected = pickedMovies
      ?.map((elem) => elem.id)
      .includes(selectedOption.id);

    setIsMoviePicked(isMovieSelected);
  }, [pickedMovies, selectedOption.id]);

  const [movieData, setMovieData] = useState<MovieDetailsType | null>(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${selectedOption.id}?api_key=472c2cb1250382eb1bb17a0fd614af0f&language=en-US`
    )
      .then((r) => r.json())
      .then((movieData) => setMovieData(movieData));
  }, [selectedOption.id]);

  const addToCollection = (selectedOption) => {
    setPickedMovies((prevState) => {
      if (Array.isArray(prevState)) {
        return [...prevState, selectedOption];
      } else {
        return [selectedOption];
      }
    });
  };

  const removeFromCollection = (selectedOption) => {
    setPickedMovies((previoslyPickedMovies) => {
      return previoslyPickedMovies?.filter(
        (movieItem) => movieItem.id !== selectedOption.id
      );
    });
  };

  return (
    <Container>
      {movieData && (
        <div>
          <MovieTitle>{selectedOption.title}</MovieTitle>

          <MoviePosterAndInfo>
            <div style={{ marginRight: '1rem' }}>
              {movieData?.poster_path && (
                <img
                  width={150}
                  src={`https://image.tmdb.org/t/p/w500/${selectedOption.poster_path}`}
                  alt="Movie poster"
                />
              )}
            </div>
            <MovieGeneralInfo>
              <MovieTextBlock>
                <MovieTextBlockSecondary>Genre</MovieTextBlockSecondary>
                <div className="movie-genres">
                  {movieData.genres &&
                    movieData?.genres.map((genre, id, arr) => (
                      <span key={id.toString()}>
                        {'  ' + genre.name + ' '}
                        {id < arr.length - 1 ? '⸱ ' : ''}
                      </span>
                    ))}
                </div>
              </MovieTextBlock>

              <div style={{ marginBottom: '10px' }}>
                <MovieTextBlockSecondary>Year</MovieTextBlockSecondary>{' '}
                {selectedOption.release_date?.substring(0, 4)}
              </div>

              {movieData?.tagline && (
                <div>
                  <MovieTextBlockSecondary>Tagline</MovieTextBlockSecondary>{' '}
                  {movieData?.tagline}
                </div>
              )}

              {isMoviePicked ? (
                <ActionButton
                  isRemoveFromCollection={isMoviePicked}
                  onClickAction={removeFromCollection}
                  selectedOption={selectedOption}
                />
              ) : (
                <ActionButton
                  isRemoveFromCollection={isMoviePicked}
                  onClickAction={addToCollection}
                  selectedOption={selectedOption}
                />
              )}
            </MovieGeneralInfo>
          </MoviePosterAndInfo>

          <MovieDescription>{movieData?.overview}</MovieDescription>
          {/* Poster */}
          {/* <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedOption.backdrop_path}`}
              alt="movie poster"
            />
          </div> */}
        </div>
      )}
    </Container>
  );
};
//<Emoji symbol={'✅'} label="done" />
