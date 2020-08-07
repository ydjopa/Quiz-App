import React from 'react';
import quizicon from '../img/quiz-icon.jpg';
import handdrag from '../img/hand-drag-icon2.jpg';


class Header extends React.Component {
 

    render() {
       
        return (
          <header className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href=" ">
                <span className="fa fa-shield"></span> TRIVIA QUIZ
              </a>
              <button
                className="navbar-toggler bg-gradient"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto"></ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#/App">
                      <img
                        src={quizicon}
                        alt="QUIZ"
                        style={{ width: "26px" }}
                      />{" "}
                      QUIZ{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/AppDrag">
                      <img
                        src={handdrag}
                        alt="DRAG"
                        style={{ width: "26px" }}
                      />{" "}
                      DRAG{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        );
    }
}

export default Header;
