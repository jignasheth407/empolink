import React, { Component } from 'react';
import StripeButton from '../../Components/StripeButton/StripeButton'

class StripePaymentsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}> Register Page</h1>
                <div>
                    <StripeButton price={25} />
                </div>
            </>
        )
    }
}

export default StripePaymentsPage;