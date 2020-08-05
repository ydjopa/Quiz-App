import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="site-footer">
        <div className="bottom-footer">
          <div className="container">
            <p className="copyright">&copy; 2020 - Yves Djopa</p>
            <p className="copyright">
              Email:<a href="mailto: ydjopa@gmail.com"> ydjopa@gmail.com</a>
            </p>
            <p className="copyright">Inspired By: <a target="_blank" href=" https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react-and-typescript">FreeCodeCamp - Beau Carnes</a></p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
