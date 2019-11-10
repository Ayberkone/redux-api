import React, { Component } from 'react';
import { connect } from "react-redux";
//import { DrinkAction } from '../../actions';
import User from './User';
import Header from './Header'
import Footer from './Footer'
import { UserActions } from "../../actions"


class Home extends Component {

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log('Change detected. State updated "' + name + '" = ' + value);
    }

    componentDidMount() {
        this.props.dispatch(UserActions.getUsers());
    }

    render() {
        let users = this.props.users

        return (
            <div className="App">
                <Header />
                <div className="container container-body mt-5 mb-5">
                    <div className="row">
                        {(users.isLoading) &&
                            users.data.map((user, i) => (
                                <div key={i} className="col-md-6 p-4">
                                    <User data={user} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users } = state;
    return {
        users
    };
}

export default connect(mapStateToProps)(Home);
