import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Timer from './Timer'


const SignUpStyles = styled.div`
.container {
  background-color: #314f41;
  color: #f2f9fc;
  padding: 20px 65px;
  font-family: Roboto;
},
.form {
  display: flex;
    justify-content: space-evenly;
}
h2 {
  margin-top: 50px;
  margin-bottom: 20px;
}
`;

export const SignUp = () => {

  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setLastName(value);

  };

  const collectEmail = (e) => {
    const { name, value } = e.target;
    return name === 'email' ? setEmail(value) : null;
  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}! Welcome to the Cold Beer Open!`);
    setFirstName('');
    setLastName('');
    setEmail('');
  };



  return (
    <SignUpStyles>
      <div className="container">
        <h1>Sign up to join us at the 44th Annual Cold Beer Open</h1>
        <p>September 18th - 22nd</p>
        <div className="timer">
          <p>Tee minus:</p>
          <Timer duration={141 * 24 * 60 * 60 * 1000} />
        </div>
        <h2>
          Hello {firstName} {lastName}
        </h2>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={email}
            name="email"
            onChange={collectEmail}
            type="text"
            placeholder="Email"
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </SignUpStyles>
  );
}
