import React from 'react';
import classes from './LoginForm.module.css';
import Modal from '../UI/Modal';

const LoginForm = (props) => {
  return (
    <Modal title="Login" onClose={props.closeLogin}>
      <div className={classes.formContainer}>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginForm;
