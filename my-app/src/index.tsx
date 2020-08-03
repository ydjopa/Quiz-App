import React from 'react';
import ReactDOM from 'react-dom';
import AppDrag from './AppDrag';
import App from './App';
// Components Import
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Index extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={App} />
                            <Route exact path="/App" component={App} />
                            <Route path="/AppDrag" component={AppDrag} />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
ReactDOM.render(<Index/>, document.getElementById("root"));


