import React, { useRef, useState, useStyles } from 'react';
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
  Button
} from "./BookingElements";
import QRCode from 'qrcode';
import axios from 'axios';
// import QrReader from 'react-qr-reader';
// import { Container, Card, Grid, CardContent, makeStyles } from '@material-ui/core';


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

  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
 

  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(text);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }

  const [input, setInput] = useState({
    FN: '',
    LN: '',
    email: '',
    phone: '',
    CID: '',
    COD: '',
    visitor: '',
    img: '',
    tour: '',
    facility: '',
    activity: ''
  })

  function handleChange(event){
    const {name, value} = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }
 

  function handleClick(event){
    event.preventDefault();
    
    const newForm = {
      FN: input.FN,
      LN: input.LN,
      email: input.email,
      phone: input.phone,
      CID: input.CID,
      COD: input.COD,
      visitor: input.visitor,
      img: input.img,
      tour: input.tour,
      facility: input.facility,
      activity: input.activity
    }

    axios.post('http://localhost:3001/facility', newForm)
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
              <FormInput type="name" name="FN" value={input.FN} onChange={handleChange} required />
              <FormLabel htmlFor="for">Last Name</FormLabel>
              <FormInput type="name" name="LN" value={input.LN} onChange={handleChange} required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" name="email" value={input.email} onChange={handleChange} required />
              <FormLabel htmlFor="for">Contact Number</FormLabel>
              <FormInput type="name" name="phone" value={input.phone} onChange={handleChange} required />
              <FormLabel htmlFor="for">Check in Date</FormLabel>
              <FormInput type="date" name="CID" value={input.CID} onChange={handleChange} required />
              <FormLabel htmlFor="for">Check out Date</FormLabel>
              <FormInput type="date" name="COD" value={input.COD} onChange={handleChange} required />

              <FormLabel htmlFor="for">
                Number of Visitor
              <FormInput type="name" name="visitor" onChange={(e) => setText(e.target.value)} required />
                            
                {/* <FormSelect name="visitor">
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
                </FormSelect> */}
                <Button onClick={() => generateQrCode()}>Generate</Button>

                            
                            <br/>
                            <br/>
                         
                            {imageUrl ? (
                              <a href={imageUrl} download>
                                  <img src={imageUrl} alt="img" typeof='img' name="img" value={input.img} onChange={handleChange} />
                              </a>) : null}
                            
                            <br/>
                            <br/>
              
            
              </FormLabel>


              <FormLabel htmlFor="for">
                Tour
                <FormSelect name="tour" value={input.tour} onChange={handleChange} >
                  <option value="Day">Day</option>
                  <option value="Night">Night</option>
                </FormSelect>
              </FormLabel>

              <FormLabel htmlFor="for">
                Facility
                <FormSelect name="facility" value={input.facility} onChange={handleChange} >
                  <option value="Bahay Kubo">Bahay Kubo</option>
                  <option value="Large Tent">Large Tent</option>
                  <option value="Medium Tent">Medium Tent</option>
                  <option value="Small Tent">Small Tent</option>
                </FormSelect>
              </FormLabel>

              <FormLabel htmlFor="for">
                Activity
                <FormSelect name="activity" value={input.activity} onChange={handleChange} >
                  <option value="Planting">Planting</option>
                  <option value="Trekking">Trekking</option>
                  <option value="Harvesting">Harvesting</option>
                  <option value="Samgy">Samgy</option>
                  <option value="Package(999)">Package(999)</option>
                </FormSelect>
              </FormLabel>
              
              <FormButton name="submit" type="submit" onClick={handleClick}>
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
