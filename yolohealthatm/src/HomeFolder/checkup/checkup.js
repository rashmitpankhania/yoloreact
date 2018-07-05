import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Check } from "./check";

class CheckUp extends Component {
    render() {
        return (
            <div>
                <div >
                    <CheckUpMenu name="1" />
                </div>
                <div >
                    <CheckUpMenu name="2" />
                </div>
                <div >
                    <CheckUpMenu name="3" />
                </div>
                <div >
                    <CheckUpMenu name="4" />
                </div>
                <div >
                    <CheckUpMenu name="5" />
                </div>
                <div >
                    <CheckUpMenu name="6" />
                </div>
                <div >
                    <CheckUpMenu name="7" />
                </div>
                <div >
                    <CheckUpMenu name="8" />
                </div>
            </div>
        )
    }
}

class CheckUpMenu extends Component {
    render() {
        return (

            <div>
                <Link to={`/checkup/${this.props.name}`}>{this.props.name}</Link>
                <Route exact path={`/checkup/${this.props.name}`} component={Check}/>
            </div>
        )
    }
}
export {
    CheckUp
};