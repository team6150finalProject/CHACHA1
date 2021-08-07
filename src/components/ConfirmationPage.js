import React from 'react';
import cookie from 'react-cookies';
import { connect } from "react-redux";
import ReactDOM from "react-dom";

class ConfirmationPage extends React.Component {
    render() {
        return (
            <div className="container-confirm">
                <div className="card" id="paymentConfirm">
                    <div className="card-body">
                        <h4>Order processed!</h4>
                    </div>
                </div>

            </div>
        );
    }
}
export default connect(
    state => ({ user: state.fetchreducer })
)(ConfirmationPage);