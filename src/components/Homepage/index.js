import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, NavBtn, NavBtnLink, Text } from './HomepageElements'

const HomePage = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">Genesis Farm</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Username</FormLabel>
                    <FormInput type='name' />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' />
                    {/* <FormButton to='/homepage'>Sign In</FormButton> */}
                    <NavBtn>
                <NavBtnLink to="/homepage">Sign In</NavBtnLink>
                
            </NavBtn>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};

export default HomePage