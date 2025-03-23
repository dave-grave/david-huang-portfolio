import React, { useState } from "react";
import Title from "./Title";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setResponse(data.success || data.error);
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          // create custom slug later
          // https://getform.io/
          onSubmit={handleSubmit}
          // action="https://getform.io/f/slug"
          // method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md
                        focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="p-2 my-2 bg-transparent border-2 rounded-md
                        focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2
                        rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block
                        px-8 py-3 w-max text-base 
                        font-medium rounded-md text-white
                        bg-gradient-to-r from-cyan-400 to-yellow-400 
                        drop-shadow-md hover:stroke-white
                        dark:bg-gradient-to-r dark:from-pink-600 dark:to-purple-600"
          >
            Contact me!
          </button>
        </form>
      </div>
      {response && <p className="text-center mt-4">{response}</p>}
    </div>
  );
}

export default Contact;
