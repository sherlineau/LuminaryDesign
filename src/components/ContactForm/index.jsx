import "./index.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const index = () => {
  const form = useRef();
  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7uwnk0v",
        "template_4tl2uy4",
        form.current,
        "05x5X5ZZeIiPOPyHh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (err) => {
          console.log(err.text);
        }
      );

    setShow(!show);
  };

  if (show) {
    return <p>Message sent!</p>;
  }

  return (
    <div className="container form">
      <h2>Send us a message</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input type="text" name="user_name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="text" name="user_email" id="email" />

        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="3" />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default index;
