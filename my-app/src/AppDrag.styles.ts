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
display: flex;
flex-direction: column;
align-items: center;

> p {
  color: #c97b1c;
}

.score {
  color: #f76020;
  font-size: 3rem;
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
  font-size: 75px;
  font-weight: bolder;
  text-align: center;
  margin: 0px;
  padding: 10px;
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

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 50px;
  /* padding-left: 15px; */
}
`;