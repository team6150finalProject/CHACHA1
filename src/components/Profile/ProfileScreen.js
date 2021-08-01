import React, {Component} from 'react';
import {reqProfile} from "../../api";
class ProfileScreen extends Component {
    async componentDidMount() {
       const {data} =await reqProfile()
       console.log(data)
    }

    render() {
        return (
            <div>
                Personal Information<hr/>
                Personal Information<hr/>
                Personal Information<hr/>
                Personal Information<hr/>
                <div>

                </div>

            </div>
        );
    }
}

export default ProfileScreen;