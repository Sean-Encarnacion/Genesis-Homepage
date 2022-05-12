import React from "react";
import emailjs from "emailjs-com";
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
} from "./BookingElements";

const Booking = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_c0857a4", e.target, "5skgWqC7tKNlBOnk2")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Genesis Farm</Icon>
          <FormContent>
            <Form action="" method="POST" onSubmit={sendEmail}>
              <FormH1>Reservation Form</FormH1>
              <FormLabel htmlFor="for">First Name</FormLabel>
              <FormInput type="name" name="FN" required />
              <FormLabel htmlFor="for">Last Name</FormLabel>
              <FormInput type="name" name="LN" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" name="email" required />
              <FormLabel htmlFor="for">Contact Number</FormLabel>
              <FormInput type="name" name="phone" required />
              <FormLabel htmlFor="for">Check in Date</FormLabel>
              <FormInput type="date" name="CID" required />
              <FormLabel htmlFor="for">Check out Date</FormLabel>
              <FormInput type="date" name="COD" required />

              <FormLabel htmlFor="for">
                Number of Visitor
                <FormSelect name="visitor">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </FormSelect>
              </FormLabel>
              <FormButton name="submit" type="submit">
                Book
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Booking;
