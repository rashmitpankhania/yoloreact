import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div>
                    <div >
                     <HomeMenu name="consult"/>
                    </div>
                    <div >
                    <HomeMenu name="checkup"/>
                    </div>
                    <div >
                    <HomeMenu name="history"/>
                    </div>

                   
              
            </div>
        )
    }
}

class HomeMenu extends Component {
    render(prpos) {
        return (
            
            <div>{this.props.name}
              
                <Router>
                     <Route  path={this.props.name}  />
                </Router>
            </div>
        )
    }
}
export default Home;