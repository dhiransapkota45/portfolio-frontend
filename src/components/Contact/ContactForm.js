import React, { useState } from "react";

const baseUrl = `http://localhost:3002`;
const ContactForm = () => {
  const [formSubmitState, setFormSubmitState] = useState(null);
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const dataRaw = await fetch(`${baseUrl}/contactform`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });
    const data = await dataRaw.json();
    setFormSubmitState(data);
    setFormDetails({name:"", email:"", phone:"", subject:"", message:""})
  };
  
  return (
    <form onSubmit={onsubmitHandler}>
      <div className="text-black font-bold text-5xl my-8 font-sans">
        Contact Form
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row mb-4">
          <input
            required
            name="name"
            onChange={onChangeHandler}
            value={formDetails.name}
            type="text"
            placeholder="Your Name*"
            className=" p-3 border focus:outline-none lg:mr-4 mb-4 lg:mb-0"
          />
          <input
            required
            name="email"
            onChange={onChangeHandler}
            value={formDetails.email}
            type="email"
            placeholder="Your Email*"
            className="p-3 border focus:outline-none"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={formDetails.phone}
          type="number"
          placeholder="Phone*"
          className="p-3 border focus:outline-none mb-4"
        />
        <div className="flex flex-col lg:flex-row mb-4">
          <input
            required
            name="subject"
            onChange={onChangeHandler}
            value={formDetails.subject}
            type="text"
            placeholder="Subject*"
            className="p-3 border focus:outline-none lg:mr-4 mb-4 lg:mb-0 "
          />
        </div>
        <textarea
          name="message"
          value={formDetails.message}
          onChange={onChangeHandler}
          cols="30"
          rows="10"
          className="p-3 h-28 border focus:outline-none resize-none"
          placeholder="Your Message..."
        ></textarea>
      </div>
      <button
        type="submit"
        class="mt-16 bg-transparent duration-300 p-5 border-2 hover:bg-slate-900 text-slate-900 font-semibold hover:text-white py-2 px-4 border-slate-900 hover:border-transparent font-sans "
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm
