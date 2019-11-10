import React, { Component } from 'react';

class User extends Component {

    render() {
        let user = this.props.data;

        return (
            <p className='text-center'>{user.name.title}. {user.name.first} {user.name.last}</p>
        );
    }
}

export default User;