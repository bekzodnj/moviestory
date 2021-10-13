import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Emoji from './common/Emoji';
import { withHover } from './common-styles/withHover';

const Container = styled.div`
  background-color: white;
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const AddButton = styled.button`
  padding: 1em;
  margin: 1em 0;
  display: block;
  transition: transform 130ms ease-out;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const MovieTitle = styled.h1`
  color: black;
`;

interface MovieData {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: null;
  };
  budget: number;
  genres: {
    id: number;
    name;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const MovieTopInfo = styled.div`
  font-size: 1em;
`;
const MovieHeaderInfoWrap = styled.div`
  display: flex;
`;

export const MovieDetails = ({ selectedOption, setPickedMovies }) => {
  const [movieData, setMovieData] = useState<MovieData | null>(null);
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
  return (
    <Container>
      {movieData && (
        <div>
          <MovieTitle>{selectedOption.title}</MovieTitle>
          <MovieHeaderInfoWrap>
            <div>
              {movieData?.poster_path && (
                <img
                  width={150}
                  src={`https://image.tmdb.org/t/p/w500/${selectedOption.poster_path}`}
                  alt="Movie poster"
                />
              )}
            </div>
            <MovieTopInfo>
              <div>Year: {selectedOption.release_date}</div>
              <div>Tagline: {movieData?.tagline}</div>

              <div>
                Genres:{' '}
                {movieData.genres &&
                  movieData?.genres.map((genre, id, arr) => (
                    <span>
                      {genre.name}
                      {id < arr.length - 1 ? ', ' : ''}
                    </span>
                  ))}
              </div>
              <AddButton onClick={() => addToCollection(selectedOption)}>
                Add to the collection <Emoji symbol={'✅'} label="done" />
              </AddButton>
            </MovieTopInfo>
          </MovieHeaderInfoWrap>

          <div>{movieData?.overview}</div>
        </div>
      )}
    </Container>
  );
};
