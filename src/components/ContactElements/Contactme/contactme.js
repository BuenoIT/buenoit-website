import styled, { createGlobalStyle, css } from 'styled-components';

export const FormStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: rgb(49,49,49);
    background: #42c920;
    height: 100%;
    margin: 0;
    color: #313131;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  margin-top: 60px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const FormTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

export const FormButton = styled.button`
  display: block;
  background-color: #42c920;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const FormErrorArea = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
