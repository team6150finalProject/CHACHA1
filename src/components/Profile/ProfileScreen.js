import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { reqProfile, reqUpdateProfile } from "../../api";
import SideBar from './SideBar';
import "./Profile.css"

const nameRegex = /^([A-Za-zÀ-ÿ][-,a-z. ']+[ ]*)+$/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      profile: {
        firstname: "",
        lastname: "",
        phone: "",
        address: "",
      }
    };
  }
  async componentDidMount() {
    const { data } = await reqProfile();
    this.setState({
      username: data.data.username,
      email: data.data.email,
      profile: data.data.profile
    });
  }


  render() {
    return (
      <div id="profile-wrapper">
        <SideBar id="profile-sidebar"/>
        <div id="profile-main">
          <h1>Profile</h1>
          <Formik
            enableReinitialize={true}
            initialValues={{
              username: this.state.username,
              email: this.state.email,
              firstname: this.state.profile.firstname,
              lastname: this.state.profile.lastname,
              phone: this.state.profile.phone,
              address: this.state.profile.address
            }}
            validationSchema={Yup.object({
              firstname: Yup.string().matches(nameRegex, 'Invalid first name'),
              lastname: Yup.string().matches(nameRegex, 'Invalid last name'),
              phone: Yup.string().matches(phoneRegex, 'Invalid phone number')
            })}
            onSubmit={(values, { setSubmitting }) => {
              const data = {
                profile: {
                  firstname: values.firstname,
                  lastname: values.lastname,
                  phone: values.phone,
                  address: values.address
                }
              }
              reqUpdateProfile(data)
                .then(response => {
                  setSubmitting(false);
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label htmlFor="username">User name</label>
                <Field type="text" name="username" disabled />
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" disabled />
                <ErrorMessage className="profile-error" name="email" component="div" />
                <label htmlFor="firstname">First name</label>
                <Field type="text" name="firstname" />
                <ErrorMessage className="profile-error" name="firstname" component="div" />
                <label htmlFor="lastname">Last name</label>
                <Field type="text" name="lastname" />
                <ErrorMessage className="profile-error" name="lastname" component="div" />
                <label htmlFor="phone">Phone number</label>
                <Field type="text" name="phone" />
                <ErrorMessage className="profile-error" name="phone" component="div" />
                <label htmlFor="address">Address</label>
                <Field type="text" name="address" />
                <ErrorMessage className="profile-error" name="address" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Update
              </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default ProfileScreen;