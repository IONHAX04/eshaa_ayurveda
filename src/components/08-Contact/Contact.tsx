// import ayurveda from "../../assets/contact/ayurveda.svg";
import { FaChevronRight } from "react-icons/fa6";

import "./Contact.css";

import location from "../../assets/contact/location.png";
import email from "../../assets/contact/email.png";
import phone from "../../assets/contact/phone.png";
import opening from "../../assets/contact/opening.png";

import TreatmentCard from "../../pages/TreatmentCard";

interface Treatment {
  image: string;
  title: string;
  contentOne: string;
  contentTwo: string;
}

export default function Contact() {
  const treatments: Treatment[] = [
    {
      image: location,
      title: "Our Location",
      contentOne: "Kanzleistrasse 115",
      contentTwo: "8004 Zurich, Switzerland.",
    },
    {
      image: email,
      title: "Our Email",
      contentOne: "contact@eshaawellness.com",
      contentTwo: "We will respond within 24 hours",
    },
    {
      image: phone,
      title: "Our Phone",
      contentOne: "0041 (0) 76 426 34 44",
      contentTwo: "Mon-Fri: 9am - 6pm",
    },
    {
      image: opening,
      title: "Opening Hours",
      contentOne: "Mon-Fri: 9am - 6pm",
      contentTwo: "Sat-Sun: Closed",
    },
  ];

  return (
    <div className="contactContents">
      <div className="contactUs">
        <div className="contactUsHeader mt-5 w-full md:w-10/12 mx-auto">
          <h3>Contact</h3>
          <div className="breadCrumb">
            <span>Home</span>
            <FaChevronRight />
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="contactGetIn">
        <h4>Get In Touch</h4>
        <h3>With Eshaa Wellness</h3>
        <p className="w-full md:w-7/12 mx-auto">
          At Eshaa Wellness, we strive to provide you with holistic health and
          wellness. Do you have question s about our therapies? Have you been
          waiting to schedule an appointment? Want to find out about our
          services? Connect with us- we'd be glad to hear from you.{" "}
        </p>
      </div>
      <div className="grid contactUsGrids w-full md:w-10/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {treatments.map((treatment, index) => (
          <TreatmentCard
            key={index}
            image={treatment.image}
            title={treatment.title}
            contentOne={treatment.contentOne}
            contentTwo={treatment.contentTwo}
          />
        ))}
      </div>

      <div className="divider w-full md:w-8/12 mx-auto"></div>

      <div className="emailContactForm mt-5 w-full md:w-10/12 mx-auto">
        <div className="emailFormContxt w-full md:w-5/12 mx-auto">
          <div className="relative my-6 enquiryTxt">
            <h2>Get in touch Online </h2>
            <p>
              If you'd prefer, you can reach out to us through our contact form
              on this site as well. Just fill in the particulars and we'll get
              back in touch with you shortly.{" "}
            </p>
          </div>
          <div className="relative my-6">
            <input
              id="id-11"
              type="text"
              name="id-11"
              placeholder="First Name"
              className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="id-11"
              className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Your Name
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
              fill="none"
              aria-hidden="true"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
              aria-labelledby="title-3 description-3"
              role="graphics-symbol"
            >
              <title id="title-3">Check mark icon</title>
              <desc id="description-3">icon description here</desc>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div className="relative my-6">
            <input
              id="id-11"
              type="text"
              name="id-11"
              placeholder="Email"
              className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="id-11"
              className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Your Email
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
              fill="none"
              aria-hidden="true"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
              aria-labelledby="title-3 description-3"
              role="graphics-symbol"
            >
              <title id="title-3">Check mark icon</title>
              <desc id="description-3">icon description here</desc>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="relative my-6">
            <input
              id="id-11"
              type="text"
              name="id-11"
              placeholder="your phone"
              className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="id-11"
              className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Your Phone
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
              fill="none"
              aria-hidden="true"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
              aria-labelledby="title-3 description-3"
              role="graphics-symbol"
            >
              <title id="title-3">Check mark icon</title>
              <desc id="description-3">icon description here</desc>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          <div className="relative my-6">
            <textarea
              id="id-11"
              name="id-11"
              placeholder="your phone"
              className="relative w-full h-28 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="id-11"
              className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Your Message
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
              fill="none"
              aria-hidden="true"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
              aria-labelledby="title-3 description-3"
              role="graphics-symbol"
            >
              <title id="title-3">Check mark icon</title>
              <desc id="description-3">icon description here</desc>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
          <div className="relative my-6 sendBtn">
            <button className="messageBtn">Send Message</button>
          </div>
        </div>
        <div className="emailFormContxt w-full md:w-5/12 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11005.563681434174!2d8.51296182084741!3d47.37031708870288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a1846221b1b%3A0xebb6caa1a55e4987!2sMeerhaa%20Ayurveda%20Gesundheitspraxis!5e1!3m2!1sen!2sin!4v1728620904904!5m2!1sen!2sin"
            width="100%"
            className="h-[300px] lg:h-[90%] mt-4"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
