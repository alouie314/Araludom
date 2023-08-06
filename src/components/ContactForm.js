import React, { forwardRef } from 'react'
import axios from 'axios';
import { Formik, Form, useField } from "formik"
import * as Yup from "yup"

import sendIcon from '../images/icons/sendIcon.svg'

import '../styles/style.css'

const MyTextInput = ({ ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className={props.name}>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <input className={"textInput " + field.name} {...field} {...props} />

    </div>
  );
};

const MyTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={props.name}>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <textarea className={"textArea " + field.name} {...field} {...props} />
    </div>
  );
};


const ContactForm = forwardRef(function ContactForm({
}, ref) {
    let handleSubmit = async (values, { setSubmitting }) => {
      // store the states in the form data
      const loginFormData = new FormData();
      loginFormData.append("firstName", values.firstName)
      loginFormData.append("lastName", values.lastName)
      loginFormData.append("email", values.email)
      loginFormData.append("message", values.message)
      try {
        // make axios post request
        await axios({
          method: "post",
          url: "https://formspree.io/f/xlezpdke",
          data: loginFormData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((response) => {
          //handle success
          document.getElementById("contactForm").style.display = "none"
          document.getElementById("contactFormSuccess").style.display = "flex"
        })
          .catch((response) => {
            //handle error
            document.getElementById("contactForm").style.display = "none"
            document.getElementById("contactFormFailure").style.display = "flex"
          })
        setSubmitting(false);
      } catch (error) {
        console.log(error)
      }



      // e.preventDefault();
      // try {
      //   let res = await postMessage("https://formspree.io/f/xlezpdke", {
      //     method: "POST",
      //     body: JSON.stringify({
      //       firstName: values.firstName,
      //       lastName: values.lastName,
      //       email: values.email,
      //       message: values.message,
      //     }),
      //   });
      //   console.log('RES ME:', res)
      //   if (res.status === 200) {
      //     document.getElementById("contactForm").style.display = "none"
      //     document.getElementById("contactFormSuccess").style.display = "flex"
      //   } else {
      //     document.getElementById("contactForm").style.display = "none"
      //     document.getElementById("contactFormFailure").style.display = "flex"
      //   }
      //   setSubmitting(false);
      // } catch (err) {
      //   console.log(err);
      // }
    }

    return (
      // <div className='contactForm' ref={ref}>
      <div className='contactForm'>
        <div className="contactContainer">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              message: '',
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                /*                         .max(15, 'Must be 15 characters or less') */
                .required('Please enter your first name.'),
              lastName: Yup.string()
                /*                         .max(15, 'Must be 15 characters or less') */
                .required('Please enter your last name.'),
              email: Yup.string()
                .email('Invalid email address.')
                .required('Please enter your email address.'),
              message: Yup.string()
                .required('Please enter your message.'),
            })}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form id="contactForm">
                <div className="contactTitle">Contact Us</div>
                <MyTextInput
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  maxLength="15"
                />
                <MyTextInput
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  maxLength="15"
                />
                <MyTextInput
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  maxLength="320"
                />
                <MyTextArea
                  name="message"
                  type="text"
                  wrap="hard"
                  placeholder="Your Message"
                  maxLength="1024"
                />
                <div className="submitDiv">
                  <button
                    className={!(formik.dirty) ? "submitBtn" : "submitBtn submitBtnActive"}
                    type="submit"
                    disabled={!(formik.dirty)}
                    title="Send Message"
                  >
                    <img
                      src={sendIcon}
                      className="sendIcon"
                      alt="Send Message"
                    />
                    Send
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          {/* <div id="contactFormSuccess">The unanimous Declaration of the thirteen United States of America, When in the Course of inhumane events, it becomes necessary for one God to dissolve the republicans which have connected them with one another, and to assume among the powers of the homeless, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to mutiny. Amen. </div> */}
          <div id="contactFormSuccess">Thanks for getting in touch! <br /> We will get back to you as soon as possible. </div>
          <div id="contactFormFailure">An error has occurred. Please try again.</div>
        </div>

      </div>
    )
})

export default ContactForm