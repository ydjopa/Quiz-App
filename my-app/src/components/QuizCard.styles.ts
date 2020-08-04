import styled from 'styled-components';

export const Wrapper = styled.div`
max-width: 1100px;
background: #fcba03;
border-radius: 10px;
border: 2px solid #0085a3;
padding: 20px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
text-align: center;

p {
  font-size: 1rem;
}
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};


export const ButtonWrapper = styled.div<ButtonWrapperProps>`
transition: all 0.3s ease;

:hover {
  opacity: 0.8;
}

button {
  cursor: pointer;
  user-select: none;
  font-size: 0.8rem;
  width: 400px;
  height: 40px;
  margin: 5px 0;

  background: ${({ correct, userClicked }) =>
    correct
      ? "linear-gradient(90deg, #56ffa4, #59bc86)"
      : !correct && userClicked
      ? "linear-gradient(90deg, #FF5656, #C16868)"
      : "linear-gradient(90deg, #56ccff, #6eafb4)"};
  border: 2px solid #f76420;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  color: #211a06;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
}

.opacitycss {
    background-color: olivedrab;
    height: 12rem;
    width: 12rem;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
    padding: 1rem;
    text-align: center;
    font-size: 1rem;
    line-height: normal;
    width: 500px;
`;