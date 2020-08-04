import React from 'react';


class Footer extends React.Component {
 

    render() {
       
        return (
           
            <footer id="site-footer">

                <div className="bottom-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 text-lg-left text-center mb-lg-0 mb-3">
                            </div>
                            <div className="col-lg-5 text-lg-left text-center mb-lg-0 mb-3">
                                <p className="copyright">&copy; 2020 - Yves Djopa</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 text-lg-left text-center mb-lg-0 mb-3">
                            </div>
                            <div className="col-lg-5 text-lg-left text-center mb-lg-0 mb-3">
                                <p className="copyright">Email:<a href="mailto: ydjopa@gmail.com"> ydjopa@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 text-lg-left text-center mb-lg-0 mb-3">
                            </div>
                            <div className="col-lg-5 text-lg-left text-center mb-lg-0 mb-3">
                                <p className="copyright">Inspired By: <a target="_blank" href=" https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react-and-typescript">FreeCodeCamp - Beau Carnes</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>




        );
    }
}

export default Footer;
