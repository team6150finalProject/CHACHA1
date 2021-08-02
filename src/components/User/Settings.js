import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import { reqUpdatePassword} from "../../api";

const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,12}$/;

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            conPassword: '',
        };
    }
  render() {
    return (
      <div>
        <h1>Settings</h1>
        <hr/>
          <div id="profile-wrapper">
              <div id="profile-main">
                  <h4>Change Password</h4>
                  <Formik
                      enableReinitialize={true}
                      initialValues={{
                          oldPassword: this.state.oldPassword,
                          newPassword: this.state.newPassword,
                          conPassword: this.state.conPassword
                      }}
                      validate={values => {
                          let errors = {};
                          if(values.newPassword.length >12 || values.newPassword.length<6 && values.newPassword !== ''){
                              errors.newPassword = 'Password should be 6-12 characters '
                          }
                          if(values.newPassword !== values.conPassword ){
                              errors.conPassword = 'The two passwords are inconsistent'
                          }
                          return errors;
                      }}
                      validationSchema={Yup.object({
                          oldPassword: Yup.string().matches(passwordReg, 'Invalid Password'),
                          newPassword: Yup.string().matches(passwordReg, 'Invalid Password'),
                          conPassword: Yup.string().matches(passwordReg, 'Invalid Password')
                      })}
                      onSubmit={async (values, {setSubmitting}) => {
                          const data = {
                              newPassword: values.newPassword,
                              oldPassword: values.oldPassword
                          };
                          const response = await reqUpdatePassword(data);
                          const result =response.data
                          alert(result.msg)
                      }}
                  >
                      {({ isSubmitting }) => (
                          <Form>
                              <label htmlFor="oldPassword">Old Password</label>
                              <Field type="password" name="oldPassword"/>
                              <ErrorMessage className="profile-error" name="oldPassword" component="div" />
                              <label htmlFor="newPassword">New Password</label>
                              <Field type="password" name="newPassword" />
                              <ErrorMessage className="profile-error" name="newPassword" component="div" />
                              <label htmlFor="conPassword">Confirm Password</label>
                              <Field type="password" name="conPassword" />
                              <ErrorMessage className="profile-error" name="conPassword" component="div" />
                              <button type="submit" disabled={isSubmitting}>
                                  Update
                              </button>
                          </Form>
                      )}
                  </Formik>
              </div>
          </div>
      </div>
    );
  }
}

export default Settings;