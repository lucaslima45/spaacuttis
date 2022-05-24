import React, { Component } from 'react';


class Footer extends Component {    
    render() {
        const currentYear = new Date().getFullYear();

        return (
            <div className="footer flexItem">
                <h5>05/2022, Lucas Lima</h5>
            </div>
        );
    }
}

export default Footer;
