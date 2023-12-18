"use client";

import React, { useState } from "react";
import countries from "@/constants/countries.json";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-10">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 items-center">
        <div className="grid grid-cols-1 xl:col-span-2 gap-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div>
              <label htmlFor="fullName" className="block tracking-widest">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                onChange={handleChange}
                className="mt-5 block w-full p-3 border border-light-gray bg-transparent rounded-full shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block tracking-widest">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
                className="mt-5 block w-full p-3 border border-light-gray bg-transparent rounded-full shadow-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div>
              <label htmlFor="phone" className="block tracking-widest">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                onChange={handleChange}
                className="mt-5 block w-full p-3 border border-light-gray bg-transparent rounded-full shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="country" className="block tracking-widest">
                Country
              </label>
              <select
                name="country"
                id="country"
                required
                onChange={handleChange}
                className="mt-5 block w-full pl-3 pr-10 py-3 text-base border border-light-gray bg-transparent rounded-full shadow-sm"
              >
                <option></option>
                {countries.map((country) => (
                  <option
                    key={country.code}
                    value={country.code}
                    className="bg-dark-blue"
                  >
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="h-full">
          <label htmlFor="message" className="block tracking-widest">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            onChange={handleChange}
            className="mt-5 block w-full px-3 py-2 border border-light-gray bg-transparent rounded-lg shadow-sm"
            rows={7}
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center mt-5">
        <p className="tracking-widest">*Required</p>
        <button
          type="submit"
          className="inline-flex justify-center py-3 px-5 shadow-sm rounded-full text-dark-blue bg-light-gray"
        >
          Send your message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
