import React, { useState } from 'react';
import '../assets/css/index.css'
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/react-hooks';
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [loginUser, { err }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ...userFormData }
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
        setShowAlert(true);
      }

     setUserFormData({
        username: '',
        email: '',
     password: '',
    });
    };


    return (

      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4" align="center">
            <img className="Logo img-fluid" src={require(`../assets/images/Logo.png`)} alt="ChatBoxLogo" />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row background">
          <div className="col-6">
            <Form noValidate validated={validated} onSubmit={handleFormSubmit} className="form">
              <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your login credentials!
              </Alert>
              <Form.Group>
                <h3 className="formName">Login</h3>
                <div className="mb-3">
                  <Form.Label htmlFor='email'>Email </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Your email'
                    name='email'
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                  />
                  <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                </div>
              </Form.Group>

              <div className="mb-3">

                <Form.Group>
                  <Form.Label htmlFor='password'>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Your password'
                    name='password'
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                  />
                  <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                </Form.Group>

              </div>
              <Button
                disabled={!(userFormData.email && userFormData.password)}
                type='submit'
                className="button"
                id="startChatting"
                variant='success'>
                Submit
              </Button>

              <div>
              <p className="text">
                Not registered?
             
              <Link to="/signup">
                  Sign Up
              </Link>
              </p> 
              </div>

            </Form>

            {/* </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" >Remember Me</label>
            </div> */}

          </div>
        </div>
      </div>

    );
  };



  export default Login;


























  // OLD CODE



  //     return (

  //         <div className="container">
  //           <div className="row">
  //             <div className="col-4"></div>
  //             <div className="col-4" align="center">
  //               <img className ="Logo img-fluid" src={require(`../assets/images/Logo.png`)} alt="ChatBoxLogo"/>
  //             </div>
  //             <div className="col-4"></div>
  //           </div>
  //           <div className="row background">
  //             <div className="col-6">
  //               <form noValidate validated={validated} onSubmit={handleFormSubmit} className="form">
  //                 <h3 className ="formName">Login</h3>
  //                 <div className="mb-3">
  //                   <input placeholder ="Email"type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  //                   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  //                 </div>
  //                 <div className="mb-3">
  //                   <input placeholder ="Password" type="password" className="form-control" id="exampleInputPassword1"/>
  //                 </div>
  //                 <div className="mb-3 form-check">
  //                   <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
  //                   <label className="form-check-label" >Remember Me</label>
  //                 </div>
  //                 <button className="button" id = "startChatting">
  //                 Start Chatting  
  //                 </button>
  //                 <p className="text">Not registered? <a href="#">Sign Up</a></p>
  //               </form>
  //             </div>
  //           </div>
  //         </div>

  //       );
  // };

