import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header id="site-header" className="p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <h1>Kullanicilar</h1>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
