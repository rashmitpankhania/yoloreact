import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                Placeholder Home
                <ul>
                    <li><HomeMenu/></li>
                    <li><HomeMenu/></li>
                    <li><HomeMenu/></li>
                </ul>
            </div>
        )
    }
}

class HomeMenu extends Component {
    render() {
        return (
            <div>placeholder for Home</div>
        )
    }
}
export default Home;