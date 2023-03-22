import React, { useState, useRef,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import data from './data';
import SingleQuestion from './Question';
import styles from './Contact.module.css';


function Contact() {
  const [questions, setQuestions] = useState(data);
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useRef();
  const userName = useRef()
  const userEmail = useRef()
  const userMessage = useRef()
  useEffect(() => {
    let timerId;
    if (showSuccess) {
      timerId = setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [showSuccess]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_csjtaon', 'template_54e753l', form.current, 'aaX_Srwmseaq8-3Zw')
      .then((result) => {
        console.log(result.text);
        console.log("msg sent");
        setShowSuccess(true)
        console.log(form.current)
     
        userName.current.value = ""
        userEmail.current.value = ""
        userMessage.current.value = ""
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className={styles.contact_body}>

      <div className={styles.container1}>
        <h3 className={styles.contact_h3}>Frequently asked Questions</h3>
        <section className={styles.info}>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>

      <div className={styles.container2}>
        <h4 className={styles.contact_email}>Feel Free To Connect With us</h4>
        <form ref={form} onSubmit={sendEmail} className={styles.contact_form}>
          <label>Name</label>
          <input type="text" name="user_name" ref={userName} />
          <label>Email</label>
          <input type="email" name="user_email" ref={userEmail}/>
          <label>Message</label>
          <textarea name="message" ref={userMessage}/>
          <input type="submit" value="Send" className={styles.submit_btn} />
        </form>
        {showSuccess && <div className={styles.popupEmail}>
              Email Sent Successfully!
            </div>}
      </div>
      
    </div>
  );
}

export default Contact;