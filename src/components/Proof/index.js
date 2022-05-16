import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormSelect,
  FormInput,
  FormInputBtn,
  FormButton,
  Text,
} from "./ProofElements";
import axios from 'axios';


const ProofOfPayment = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0agu7fr", "template_us1uy4p", form.current, "ehKV5WmSO1f4PDI9x")
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    // alert("Reserved Successfully!");
  }
  const notify = () => {
    toast('Reserved Successfully!')
  }

//   const fileSelectedHandler = (event) => {
//     this.setState({
//         selectedFile: event.target.files[0]
//     })
//   }
//   const fileUploadHandler = (event) => {
//     axios.post('');
// }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Genesis Farm</Icon>
          <FormContent>
            <Form ref={form} onSubmit={sendEmail}>
              <FormH1>Proof of Payment</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type="name" name="Name" required />
              <FormLabel htmlFor="for">Reference Number</FormLabel>
              <FormInput type="name" name="RN" required />
              <FormLabel htmlFor="for">Proof (Please provide image link) </FormLabel>
              <FormInput type="name" name="link" required />
              {/* <FormInput type="file" onChange={fileSelectedHandler} name="link" required /> */}
             

            
              
              <FormButton name="submit" type="submit" onClick={notify}>
                Upload
              </FormButton>
              <ToastContainer />
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default  ProofOfPayment;
