"use client";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", contactForm);
      if (response.status === 200) {
        toast.success("Thank you, form has be submitted", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0.1,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen my-6 mx-auto py-4 max-w-[500px] ">
      <ToastContainer />
      <form className="bg-secondary-gray p-6 flex flex-col items-center gap-4 w-full">
        <div className="w-full">
          <label className="text-white">
            <span>Full name</span>
          </label>
          <input
            type="text"
            value={contactForm.name}
            placeholder="Name"
            onChange={(e) =>
              setContactForm({ ...contactForm, name: e.target.value })
            }
            className="w-full p-3 rounded-md focus:outline-none "
          />
        </div>
        <div className="w-full">
          <label className="text-white">
            <span>Email</span>
          </label>

          <input
            type="email"
            placeholder="name@example.com"
            onChange={(e) =>
              setContactForm({ ...contactForm, email: e.target.value })
            }
            className="w-full p-3 rounded-md focus:outline-none"
          />
        </div>
        <div className="w-full">
          <label className="text-white">
            <span>Message</span>
          </label>
          <textarea
            onChange={(e) =>
              setContactForm({ ...contactForm, message: e.target.value })
            }
            className="w-full p-3 rounded-md focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={submitHandler}
          className="bg-[rgba(255,255,255,0.5)] p-3 rounded-md w-1/2 "
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
