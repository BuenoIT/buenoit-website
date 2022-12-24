import React from 'react';
import { useState } from 'react';
import {
  Form,
  FormButton,
  FormErrorArea,
  FormInput,
  FormStyle,
  FormTextArea,
  FormWrapper,
} from './contactme';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const ContactMe = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === '') {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError('');

    emailjs
      .sendForm(
        'service_49qo41s',
        'buenoitwebsite_dev00',
        form.current,
        'm42_zoRF7kAg0xL84'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(
            `Hello ${state.name}, I have received your message and will contact you shortly.`
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <FormStyle />
      <FormWrapper>
        <Form ref={form} onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <br />
          <label htmlFor="name">Name: </label>
          <FormInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email: </label>
          <FormInput
            type="text"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="message">Message: </label>
          <FormTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <FormErrorArea>
              <p>{error}</p>
            </FormErrorArea>
          )}
          {success && (
            <FormErrorArea>
              <p>{success}</p>
            </FormErrorArea>
          )}

          <FormButton type="submit">Send Message</FormButton>
        </Form>
      </FormWrapper>
    </>
  );
};

export default ContactMe;
