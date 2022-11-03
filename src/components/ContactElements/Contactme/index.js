import React from 'react';
import { Form } from 'react-router-dom';
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
} from './contactme';

const ContactMe = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Gui Bueno</Icon>
          <FormContent>
            <Form method="post" action="/contactme">
              <FormH1>Text me</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" name="email" required />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInput type="text" name="descr" required />
              <FormButton type="submit">Send</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactMe;
