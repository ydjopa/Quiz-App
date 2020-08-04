// Using Global Style
import styled, { createGlobalStyle } from 'styled-components';

// Using Background Image
import BgImage from './img/bg.jpg';



export const GlobalStyle = createGlobalStyle`

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
background-image: url(${BgImage});
  background-size: cover;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}


* {
  box-sizing: border-box;
  font-family: 'Permanent+Marker', Montserrat, sans-serif;
}



`;

export const Wrapper = styled.div`
{         display: flex;
flex-direction: column;
align-items: center;

> p {
  color: #c97b1c;
}

.score {
  color: #f76020;
  font-size: 35px;
  margin: 30px;
  background: linear-gradient(
    220deg,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.2) 180%
  );
  padding: 10px;
  -webkit-text-stroke: 2px #f7be20;
}

h1 {
  font-family: Montserrat, Fascinated Inline, Heattenschweiler,
    "Arial Narrow Bold", sans-serif;
  font-size: 55px;
  font-weight: bolder;
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  background: linear-gradient(
    170deg,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.2) 80%
  );
  background: text;
  -webkit-text-stroke: 1px #f7be20;
  color: #f76420;
}

p {
  color: #211a06;
  font-size: 20px;
}

h3 {
  color: #ffff00;
  font-size: 2rem;
}

button,
span {
  font-size: 1rem;
}

.kMPOdi {
  max-width: 1100px;
  background: #fcba03;
  border-radius: 10px;
  border: 2px solid #f76420;
  padding: 20px;
  box-shadow: 1px 5px 15px rgba(0, 0, 0, 0.75);
  text-align: center;
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

.opacitycss {
  border: 2px solid #f76420;
  height: 12rem;
  width: 12rem;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  line-height: normal;
  width: 410px;
  margin: 5px 30px;
  background: linear-gradient(
    170deg,
    rgba(86, 204, 255),
    rgba(110, 175, 180) 80%
  );
  box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 0px;
}

`;