import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          // create custom slug later
          // https://getform.io/
          action="https://getform.io/f/slug"
          method="POST"
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
            type="button"
            className="text-center inline-block
                        px-8 py-3 w-max text-base 
                        font-medium rounded-md text-white
                        bg-gradient-to-r from-cyan-500 to-yellow-500 
                        drop-shadow-md hover:stroke-white"
          >
            Contact me!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
