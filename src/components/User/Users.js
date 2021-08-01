import React from 'react';
import UserCard from "./UserCard";


class Users extends React.Component {
    render() {
        return (
            <div>
                <div className="profileSection">
                    <h2>Your Account</h2>
                    <div id="profileCards">
                        <div className="content-warp">
                            <div className="table-responsive">
                                <table className="table table-hover table-borderless">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <UserCard type="Your Orders" />
                                        </td>
                                        <td>
                                            <UserCard type="Your Membership" />
                                        </td>
                                        <td>
                                            <UserCard type="Your Profiles" />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table className="table table-hover table-borderless">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <UserCard type="Your Favourites" />
                                        </td>
                                        <td>
                                            <UserCard type="Your Coupon" />
                                        </td>
                                        <td>
                                            <UserCard type="Your Payments" />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;