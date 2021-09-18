import React, { useState } from 'react';
import '../assets/css/index.css'


import { useMutation } from '@apollo/react-hooks';
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

const SignUp = () => {

  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addUser] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...userFormData }
      });

      Auth.login(data.addUser.token);
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
            <h3 className="formName">Sign Up</h3>
              <div className="mb-3">
              <Form.Label htmlFor='username'>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Your username'
                name='username'
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
              <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
              </div>
            </Form.Group>


            <Form.Group>
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
              disabled={!(userFormData.username && userFormData.email && userFormData.password)}
              type='submit'
              className="button"
              id="startChatting"
              variant='success'>
              Submit
            </Button>

          </Form>


        </div>
      </div>
    </div>

  );
};




export default SignUp;















//OLD CODE    

//     return (

//         <div className="container">
//           <div className="row">
//             <div className="col-4"></div>
//             <div className="col-4" align="center">
//               <img className ="Logo img-fluid" src={require(`./assets/images/Logo.png`)} alt="ChatBoxLogo"/>
//             </div>
//             <div className="col-4"></div>
//           </div>
//           <div className="row background">
//             <div className="col-6">
//               <form className="form">
//                 <h3 className ="formName">Sign Up</h3>
//                 <div className="mb-3">
//                   <input type="text" class="form-control" placeholder="First Name" aria-label="Username"/>
//                 </div>
//                 <div className="mb-3">
//                   <input type="text" class="form-control" placeholder="Last Name" aria-label="Username"/>
//                 </div>
//                 <div className="mb-3">
//                   <input type="text" class="form-control" placeholder="Phone Number" aria-label="Username"/>
//                 </div>
//                 <div className="mb-3">
//                   <input placeholder ="Email"type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//                   <div id="emailHelp" className="form-text"></div>
//                 </div>
//                 <p className="privacyText">
//                   By clicking on next, you acknowledge that you have read and accepted our <a href="#"> Terms of Service</a> and the Privacy Policy.
//                 </p>
//                 <a href="#" className="nextButton">
//                   Next  
//                 </a>
//               </form>
//             </div>
//           </div>
//         </div>
//     );
// };

