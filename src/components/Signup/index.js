import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignupElements'
// import {setUsernameReg, setPasswordReg, register} from './src/App2';

const SignUp = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">Genesis Farm</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign Up</FormH1>
                    <FormLabel htmlFor='for'>Username</FormLabel>
                    <FormInput type='text'  />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password'  />
                    <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Sign Up</FormButton>
                    
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};

export default SignUp