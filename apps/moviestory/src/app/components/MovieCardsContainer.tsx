import styled from 'styled-components';

import { moviesArr } from '../../assets/movieData';
import { MovieDataList } from '../interfaces/MovieDataList';
import { MovieCardCoverType } from '../interfaces/styled-component/MovieCardCoverType';
import { SingleMovieCard } from './SingleMovieCard';

const MovieCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  color: white;
  flex-basis: 70%;
  /* border: 1px solid red; */
`;

const MovieCardCover = styled.div<MovieCardCoverType>`
  width: 158px;
  height: 234px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background: ${(props: MovieCardCoverType) =>
    props.coverUrl ? `url(${props.coverUrl})` : '#fff'};
  background-size: cover;
  background-repeat: no-repeat;
`;

const MovieCardText = styled.div`
  margin-top: 0.5em;
  text-align: left;
  font-size: 1em;
  font-family: 'Noto Sans', sans-serif;
  & > span {
    display: block;
  }
  & > span:nth-child(2) {
    color: #ffffff6e;
    font-size: 0.9em;
  }
`;

const MovieCard = styled.div`
  flex: 0 0 18%;
  margin: 0.8em 1.3em;
  /* border: 1px solid yellow; */
  & > * {
    display: block;
  }
`;

export const MovieCardsContainer = ({ movieData, onMovieSelect }) => {
  return (
    <MovieCardContainer>
      {movieData &&
        movieData.map((singleMovieData) => (
          <SingleMovieCard
            singleMovieData={singleMovieData}
            isEmptyCard={false}
            onMovieSelect={onMovieSelect}
          />
        ))}
    </MovieCardContainer>
  );
};
