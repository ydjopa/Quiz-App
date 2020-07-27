import styled, { createGlobalStyle } from 'styled-components';

import BgImage from './img/bg.jpg'; 

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  display: flex;
  margin: 0px;
  padding: 0px;
}


body {
  background-image: url(${BgImage});
  background-size: cover;
  margin: 100hr;
  display: flex;
  justify-content: left;
  align-items: center;
}

* {
  box-sizing: border-box;
  font-family: 'Permanent+Marker', Montserrat, sans-serif;
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
  color: #c97b1c;
}

.score {
  color: #fff;
  font-size: 3rem;
  margin: 10px;
  background: linear-gradient(
    100deg,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.2) 80%
  );
  padding: 10px;
  -webkit-text-stroke: 1px #f7be20;
}

h1 {
  font-family: Montserrat, Fascinated Inline, Heattenschweiler,
    "Arial Narrow Bold", sans-serif;
  font-size: 75px;
  font-weight: bolder;
  text-align: center;
  margin: 20px;
  padding: 10px;
  background: linear-gradient(
    100deg,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.2) 80%
  );
  background: text;
  -webkit-text-stroke: 1px #f7be20;
  color: #f76420;
}

p{
  color: #211a06;
  font-size: 20px;
}

h3 {
  color: #ffff00; 
  font-size: 2rem;
}
.start,
.next {
  cursor: pointer;
  background: linear-gradient(180deg, #fff, #f7be20);
  border: 2px solid #d38558;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 40px;
  margin: 20px 0;
  padding: 0 40px;
  font-size: 1rem;
}

.start {
  max-width: 200px;
}
`;