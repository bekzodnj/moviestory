import React, { useEffect, useState } from 'react';
import { Message } from '@moviestory/api-interfaces';
import styled from 'styled-components';

import moviePoster from '../assets/movie-posters/dark-knight.jpg';
import matrixPoster from '../assets/movie-posters/vanilla.jpg';

const Button = styled.button`
  color: blue;
  background: white;
  padding: 1em 2em;
  border-radius: 3px;
`;

const Wrapper = styled.div`
  background: #373b44;
  text-align: center;
  background: radial-gradient(
    57.16% 142.36% at 70.37% 32.78%,
    #44587e 0%,
    #222037 99.03%
  );
  font-family: sans-serif;
  color: white;
`;

const MovieCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em 20em;
`;

const MovieCard = styled.div`
  & > img {
    display: inline-block;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

const MovieCard2 = styled.div`
  width: 158px;
  height: 234px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background: url(${matrixPoster});
  background-size: cover;
  background-repeat: no-repeat;
`;

const MovieText = styled.div`
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

const MovieCardWrap = styled.div`
  flex: 0 0 18%;
  margin: 0.8em 1.3em;
  & > * {
    display: block;
  }
`;

const StyledButton = styled(Button)`
  background: tomato;
  color: white;
  border: 1px solid tomato;
  &:hover {
    background: orange;
  }
`;

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <Wrapper style={{ textAlign: 'center' }}>
        <h2>My top Picks</h2>
        <div style={{ height: '100vh' }}>
          <MovieCardContainer>
            <MovieCardWrap>
              <MovieCard>
                <img
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                  src={moviePoster}
                  alt="Nx - Smart, Extensible Build Framework"
                />
              </MovieCard>
              <MovieText>
                <span>Batman Begins</span>
                <span>Action, Drama</span>
              </MovieText>
            </MovieCardWrap>
            <MovieCardWrap>
              <MovieCard2></MovieCard2>
              <MovieText>
                <span>Matrix</span>
                <span>Action, Sci-fi</span>
              </MovieText>
            </MovieCardWrap>
            <MovieCardWrap>
              <MovieCard>
                <img
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                  src={moviePoster}
                  alt="Nx - Smart, Extensible Build Framework"
                />
              </MovieCard>
              <MovieText>
                <span>Batman Begins</span>
                <span>Action, Drama</span>
              </MovieText>
            </MovieCardWrap>
            <MovieCardWrap>
              <MovieCard>
                <img
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                  src={moviePoster}
                  alt="Nx - Smart, Extensible Build Framework"
                />
              </MovieCard>
              <MovieText>
                <span>Batman Begins</span>
                <span>Action, Drama</span>
              </MovieText>
            </MovieCardWrap>
            <MovieCardWrap>
              <MovieCard>
                <img
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                  src={moviePoster}
                  alt="Nx - Smart, Extensible Build Framework"
                />
              </MovieCard>
              <MovieText>
                <span>Batman Begins</span>
                <span>Action, Drama</span>
              </MovieText>
            </MovieCardWrap>
            <MovieCardWrap>
              <MovieCard>
                <img
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                  src={moviePoster}
                  alt="Nx - Smart, Extensible Build Framework"
                />
              </MovieCard>
              <MovieText>
                <span>Batman Begins</span>
                <span>Action, Drama</span>
              </MovieText>
            </MovieCardWrap>
            <MovieCardWrap>
              <MovieCard>
                <img
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                  src={moviePoster}
                  alt="Nx - Smart, Extensible Build Framework"
                />
              </MovieCard>
              <MovieText>
                <span>Batman Begins</span>
                <span>Action, Drama</span>
              </MovieText>
            </MovieCardWrap>
            <MovieCardWrap>
              <MovieCard>
                <img
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                  src={moviePoster}
                  alt="Nx - Smart, Extensible Build Framework"
                />
              </MovieCard>
              <MovieText>
                <span>Batman Begins</span>
                <span>Action, Drama</span>
              </MovieText>
            </MovieCardWrap>
          </MovieCardContainer>
        </div>
      </Wrapper>
      {/* <div>{m.message}</div> */}
    </>
  );
};

export default App;
