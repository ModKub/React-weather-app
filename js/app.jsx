import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import weatherIcons from '../icons.json';
import {Localise} from './components/Localise.jsx';
import {Search} from './components/Search.jsx';
import {Info} from './components/Info.jsx';

document.addEventListener('DOMContentLoaded', function() {

    class Template extends React.Component {
        render() {
            return (
                <div>
                    <header className="main-header">
                            <h1 className="visuallyhidden">
                                React Weather App
                            </h1>
                            <div>
                                <nav className="main-nav">
                                    <ul className="menu">
                                        <li className="current">
                                            <Link to="/">HOME</Link>
                                        </li>
                                        <li>
                                            <Link to="/search">SEARCH</Link>
                                        </li>
                                        <li>
                                            <Link to="/info">INFO</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                    </header>
                    {this.props.children}
                    <footer className="main-footer">
                        <div className="container-footer">
                            <div className="author-info">author: Jakub Modzelewski</div>
                            <div className="media">
                                <a href="https://github.com/ModKub">GITHUB</a>
                                <a href="https://www.linkedin.com/in/jakub-modzelewski/">LINKEDIN</a>
                            </div>
                        </div>
                    </footer>
                </div>
            )
        }
    }

    class NotFound extends React.Component {
        render() {
            return window.alert("404: Not Found");
        }
    }

    class App extends React.Component {
        render() {
            return <div>
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Localise}></IndexRoute>
                        <Route path='/search' component={Search}></Route>
                        <Route path='/info' component={Info}></Route>
                        <Route path='*' component={NotFound}></Route>
                    </Route>
                </Router>
            </div>
        }
    }


    ReactDOM.render(
        <App/>, document.getElementById('app'));
});
