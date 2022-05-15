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
} from "./BookingElements";


const Booking = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ez5f6hg", "template_c0857a4", form.current, "5skgWqC7tKNlBOnk2")
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
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Genesis Farm</Icon>
          <FormContent>
            <Form ref={form} onSubmit={sendEmail}>
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
                  <option value="3">4</option>
                  <option value="3">5</option>
                  <option value="3">6</option>
                  <option value="3">7</option>
                  <option value="3">8</option>
                  <option value="3">9</option>
                  <option value="3">10</option>
                </FormSelect>
              </FormLabel>

              <FormLabel htmlFor="for">
                Tour
                <FormSelect name="visitor">
                  <option value="Day">Day</option>
                  <option value="Night">Night</option>
                </FormSelect>
              </FormLabel>

              <FormLabel htmlFor="for">
                Facility
                <FormSelect name="visitor">
                  <option value="Bahay Kubo">Bahay Kubo</option>
                  <option value="Large Tent">Large Tent</option>
                  <option value="Medium Tent">Medium Tent</option>
                  <option value="Small Tent">Small Tent</option>
                </FormSelect>
              </FormLabel>

              <FormLabel htmlFor="for">
                Activity
                <FormSelect name="visitor">
                  <option value="Planting">Planting</option>
                  <option value="Trekking">Trekking</option>
                  <option value="Harvesting">Harvesting</option>
                  <option value="Samgy">Samgy</option>
                  <option value="Package(999)">Package(999)</option>
                </FormSelect>
              </FormLabel>
              
              <FormButton name="submit" type="submit" onClick={notify}>
                Book
              </FormButton>
              <ToastContainer />
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Booking;
