import * as React from 'react';

import styled from 'styled-components';
import { MovieCardCoverType } from '../interfaces/styled-component/MovieCardCoverType';
import Emoji from './common/Emoji';
import { withHover } from './common-styles/withHover';

const MovieCard = styled(withHover).attrs({
  as: 'div',
})`
  flex: 0 0 18%;
  margin: 0.8em 0.8em;
  position: relative;
  /* border: 1px solid yellow; */
  & > * {
    display: block;
  }

  &:hover > button {
    visibility: visible;
    opacity: 1;
  }
`;

const RemoveMovieButton = styled.button`
  all: unset;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.1s linear, opacity 0.1s linear;

  cursor: pointer;
  position: absolute;
  right: 0;
  font-size: 2em;
  &:focus {
    outline: 0;
  }
`;

const MovieCardCover = styled.div<MovieCardCoverType>`
  width: 158px;
  height: 234px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background: ${(props: MovieCardCoverType) =>
    props.coverUrl ? `url(${props.coverUrl})` : `transparent`};
  background-size: ${(props) => (props.isEmpty ? '5em' : 'cover')};
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  border-style: ${(props) => (props.isEmpty ? 'dashed' : 'none')};
  justify-content: center;
  align-items: center;

  .wrap {
    margin-top: 5px;
    display: flex;
    position: relative;
  }
  .line {
    width: 1px;
    height: 15px;
    background: 'white';
    background-color: white;
    border: 1px solid white;
    display: block;
  }
  .horizontal {
    position: absolute;
    transform: rotate(90deg);
  }
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

export const SingleMovieCard = ({ singleMovieData, onMovieSelect }) => {
  let movieCardElem;
  const isEmptyCard = !singleMovieData;
  if (isEmptyCard) {
    movieCardElem = (
      <MovieCard>
        <RemoveMovieButton>
          <Emoji symbol="❎" />
        </RemoveMovieButton>
        <MovieCardCover coverUrl={''} isEmpty={isEmptyCard}>
          <div>A movie goes here</div>
          <div className="wrap">
            <div className="line"></div>
            <div className="line horizontal"></div>
          </div>
        </MovieCardCover>
        <MovieCardText></MovieCardText>
      </MovieCard>
    );
  } else {
    movieCardElem = (
      <MovieCard
        key={singleMovieData.title}
        onClick={() => onMovieSelect(singleMovieData)}
      >
        <RemoveMovieButton>
          <Emoji symbol="❎" />
        </RemoveMovieButton>
        <MovieCardCover
          isEmpty={isEmptyCard}
          coverUrl={
            'https://image.tmdb.org/t/p/w500/' + singleMovieData.poster_path
          }
        ></MovieCardCover>
        <MovieCardText>
          <span>{singleMovieData.title}</span>
          <span>{singleMovieData?.release_date?.slice(0, 4)}</span>
        </MovieCardText>
      </MovieCard>
    );
  }

  return movieCardElem;
};
