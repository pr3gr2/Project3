import React, { useState } from 'react';
import Login from '../pages/LoginPage';
// import { useMutation } from '@apollo/react-hooks';
// import { Form, Button, Alert } from 'react-bootstrap';
// import Auth from '../utils/auth'; 
// import { LOGIN_USER } from '../utils/mutations'; 
// import { useForm } from 'react-hook-form';

const loginForm = () => {
  //const [userFormData, setUserFormData] = useState({ email: '', password: '' });
 // const [validated] = useState(false);
 // const [showAlert, setShowAlert] = useState(false);

  //const[loginUser, {err}] = useMutation(LOGIN_USER);
  
 // const handleInputChange = (event) => {
   // const { name, value } = event.target;
    //setUserFormData({ ...userFormData, [name]: value });
 // };

  //const handleFormSubmit = async (event) => {
   // event.preventDefault();

    //const form = event.currentTarget;
   // if (form.checkValidity() === false) {
    //  event.preventDefault();
     // event.stopPropagation();
    //}

    // try {
    //   const { data } = await loginUser({
    //     variables: {...userFormData} 
    //   });
    //   Auth.login(data.login.token);
    // } catch (err) {
    //   console.error(err);
    //   setShowAlert(true);
    // }

    // setUserFormData({
    //   username: '',
    //   email: '',
    //   password: '',
    // });
  // };

  return (
    <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4" align="center">
              <img className ="Logo img-fluid" src={require(`../assets/images/Logo.png`)} alt="ChatBoxLogo"/>
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row background">
            <div className="col-6">
              
            </div>
          </div>
        </div>
  );
};

export default loginForm;
