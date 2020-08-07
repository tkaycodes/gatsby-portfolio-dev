import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';
import curvedArrow from 'assets/curvedarrow.png';


export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
      recaptcha: '',
      success: false,
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Full name field is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
      recaptcha: Yup.string().required('Robots are not welcome yet!'),
    })}
    onSubmit={async ({ name, email, message }, { setSubmitting, resetForm, setFieldValue }) => {
      try {
        await axios({
          method: 'POST',
          url: `${process.env.GATSBY_PORTFOLIO_FORMIK_ENDPOINT}`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            name,
            email,
            message,
          }),
        });
        setSubmitting(false);
        setFieldValue('success', true);
        setTimeout(() => resetForm(), 6000);
      } catch (err) {
        console.log(err);
        setSubmitting(false);
        setFieldValue('success', false);
				alert('Something went wrong, please try again!') // eslint-disable-line
      }
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (

      <Form>
        
        <InputField>
          <Input
            as={FastField}
            type="text"
            name="name"
            component="input"
            aria-label="name"
            placeholder="Full name*"
            error={touched.name && errors.name}
          />
          <ErrorMessage component={Error} name="name" />
        </InputField>
        <InputField>
          <Input
            id="email"
            aria-label="email"
            component="input"
            as={FastField}
            type="email"
            name="email"
            placeholder="Email*"
            error={touched.email && errors.email}
          />
          <ErrorMessage component={Error} name="email" />
        </InputField>
        <InputField>
          <Input
            as={FastField}
            component="textarea"
            aria-label="message"
            id="message"
            rows="8"
            type="text"
            name="message"
            placeholder="Message*"
            error={touched.message && errors.message}
          />
          <ErrorMessage component={Error} name="message" />
        </InputField>
        {values.name && values.email && values.message && (
          <InputField>
            <FastField
              component={Recaptcha}
              sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
              name="recaptcha"
              onChange={value => setFieldValue('recaptcha', value)}
            />
            <ErrorMessage component={Error} name="recaptcha" />
          </InputField>
        )}
        {values.success && (
          <InputField>
            <Center>
              <h4>Your message has been successfully sent, I will get back to you ASAP!</h4>
            </Center>
          </InputField>
        )}
        <Center style={{position: 'relative'}}>
        {/* <p>
            I am currently open to <span style={{color: 'rgb(0, 116, 217)'}}>remote only</span> opportunities building with <span style={{color: 'rgb(0, 116, 217)'}}>javascript</span>
          </p> */}
          <Button secondary type="submit" disabled={isSubmitting}>
            Lets Connect
          </Button>

          <img src={curvedArrow} style={{transform: 'rotate(380deg)', maxWidth: '40px', left: '-10px', position: 'absolute', top: '-15px', bottom: '50px'}} />
          <p style={{fontSize: '12pt', marginTop: '20px'}}>
           I like to build things that are visually appealing while maintaining a modular, secure and performant architecture. I am currently open to <span style={{color: 'rgb(0, 116, 217)'}}>remote</span> opportunities building cool things with <span style={{color: 'rgb(0, 116, 217)'}}>Javascript</span>
          </p>
        </Center>
      </Form>
    )}
  </Formik>
);
