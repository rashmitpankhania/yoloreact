import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <div >
                    <HomeMenu name="consult" />
                </div>
                <div >
                    <HomeMenu name="checkup" />
                </div>
                <div >
                    <HomeMenu name="history" />
                </div>
            </div>
        )
    }
}

class HomeMenu extends Component {
    render() {
        return (

            <div>
                <Link to={`/${this.props.name}`}>{this.props.name}</Link>

            </div>
        )
    }
}

const HomeButton = () => (
    <Link to="/">HomeButton</Link>
);

export {
    Home,
    HomeButton
}