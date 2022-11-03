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
  FormWrapInput,
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
              <FormH1>
                Get in touch with me and I will gladly respond as soon as
                possible
              </FormH1>
              <FormWrapInput>
                <FormLabel htmlFor="for">Enter your email: </FormLabel>
                <FormInput type="email" name="email" required />
              </FormWrapInput>
              <FormWrapInput>
                <FormLabel htmlFor="for">Enter your message: </FormLabel>
                <FormInput
                  type="text"
                  name="descr"
                  required
                  rows="5"
                  cols="33"
                />
              </FormWrapInput>
              <FormWrapInput>
                <FormButton type="submit">Send</FormButton>
              </FormWrapInput>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactMe;
