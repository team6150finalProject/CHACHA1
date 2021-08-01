import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { reqProfile, reqUpdateProfile } from "../../api";
import "./Profile.css"

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
      <div id="profile-container">
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
              <ErrorMessage name="username" component="div" />
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" disabled />
              <ErrorMessage name="email" component="div" />
              <label htmlFor="firstname">First name</label>
              <Field type="text" name="firstname" />
              <ErrorMessage name="firstname" component="div" />
              <label htmlFor="lastname">Last name</label>
              <Field type="text" name="lastname" />
              <ErrorMessage name="lastname" component="div" />
              <label htmlFor="phone">Phone number</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" />
              <label htmlFor="address">Address</label>
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ProfileScreen;