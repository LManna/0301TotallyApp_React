import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, Link, browserHistory,IndexLink} from 'react-router';

var Home = React.createClass({
    render: function () {
        return(
            <div>
                <h2>Hello</h2>
                <p>
                    Cras facilisis urna ornare ex volutpat,etconvallis erat elementunm,
                    metus dui bibendum est, eget rhoncus nibh metus nec massa. Cum sociis
                    natoque penatibus et magnis dis parturient mentes, nascetur ridiculus mus
                </p>
                <p>
                    Duis a tuipis sed lacus dapibus elementum sed eu lectus.
                </p>
            </div>
        )
    }
})

var Contact = React.createClass({
    render: function () {
        return (
            <div>
                <h2>GOT QUESTIONS?</h2>
                <p>THE EASIEST THING TO ID POST ON OUR forums</p>
            </div>
        )
    }
})

var Stuff = React.createClass({
    render: function () {
        return (
            <div>
                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Rget erat</li>
                    <li>Id prottitot</li>
                </ol>
            </div>
        )
    }
})

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Simple Spa</h1>
                <ul className="header">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/stuff" activeClassName="active">Stuff</Link></li>
                    <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>

        )
    }
})





ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="stuff" component={Stuff} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>,

    document.querySelector("#container")
)

