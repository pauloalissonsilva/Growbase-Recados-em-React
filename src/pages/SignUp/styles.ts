import styled,{keyframes}from 'styled-components';

import signUpBgImg from '../../assets/sign-up-bg.jpg';

import {shade} from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: #518b9d;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const apperFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${apperFromRight} 1.5s;

  img {
    width: 168px;
  }

  form {
      margin: 60px 0;
      width: 340px;
      text-align: center;

      h1 {
        margin-bottom: 24px;
      }

      a {
        display: block;
        color: #f4ede8;
        text-decoration: none;
        margin-top: 24px;
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.2, '#f4ede8')};
        }

      }
  }

  > a {
    display: block;
    color: #ff9000;
    text-decoration: none;
    margin-top: 24px;
    transition: color 0.2s;
    display: flex;
    align-items: center;


    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBgImg}) no-repeat center;
  background-size: cover;

`;
