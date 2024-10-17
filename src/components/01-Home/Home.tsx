import { useTranslation } from "react-i18next";

import massage from "../../assets/home/massage.png";
import specialBath from "../../assets/home/bath.png";
import facial from "../../assets/home/facial.png";
import hydro from "../../assets/home/hydro.png";
import group from "../../assets/home/group.png";

import TreatmentCard from "../../pages/TreatmentCard";
import "./Home.css";
import homeBg from "../../assets/home/homeIntro.png";
import pricelist from "../../assets/home/pricelist.png";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// import pointer from "../../assets/contact/ayurveda.svg";

interface Treatment {
  image: string;
  title: string;
}

interface TreatmentList {
  name: string;
  duration: string;
  price: string;
}

export default function Home() {
  const { t } = useTranslation("global");
  const treatments: Treatment[] = [
    { image: massage, title: "Massage Therapy" },
    { image: specialBath, title: "Special Bath" },
    { image: facial, title: "Facial Treatment" },
    { image: hydro, title: "Hydrotherapy" },
    { image: group, title: "Group Therapy" },
    // { image: reflxology, title: "Reflexology" },
  ];

  const treatmentData: TreatmentList[] = [
    { name: "Whole Body", duration: "60 Mins", price: "150.00 CHF" },
    { name: "Back", duration: "30 Mins", price: "120.00 CHF" },
    { name: "Shirodhara", duration: "30 Mins", price: "120.00 CHF" },
    { name: "Udwarthanam", duration: "60 Mins", price: "150.00 CHF" },
    { name: "Njavara Kizhi", duration: "60 Mins", price: "150.00 CHF" },
    { name: "Fussreflexzonen", duration: "30 Mins", price: "120.00 CHF" },
  ];

  return (
    <div>
      <div className="homePageContents">
        <div className="homePageWelcomeCont col-lg-7 md-12">
          <h5 className="text-xl font-bold mb-4">Logo Here</h5>
          <p className="text-lg mb-4">Experience Holistic Healing at</p>
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Eshaa Wellness
          </h2>
          <h3 className="text-2xl mt-4 font-medium text-gray-700">
            Power of Ayurveda for a Balanced Life.
          </h3>
          <button>Book An Appointment</button>
        </div>
      </div>
      <div className="treatments">
        <div className="homeTreatments mt-12 col-lg-10">
          <h3 className="text-3xl font-bold text-center mb-8">
            Explore Our Treatments
          </h3>
          <div className="grid grid-cols-1 mainCardGrids md:grid-cols-2 lg:grid-cols-5 gap-2 justify-items-center">
            {treatments.map((treatment, index) => (
              <TreatmentCard
                key={index}
                image={treatment.image}
                title={treatment.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="homeWelcomeContents row pb-5">
        <div className="homeContOne col-lg-5 col-md-10">
          <div className="welcomeEshaa">
            <h3>Welcome to Eshaa Wellness! </h3>
            <p style={{ textIndent: "2em" }}>
              We believe in the exceptional potential of Ayurveda that can help
              restore all elements of the mind, body, and soul back to harmony.
              Nestled in Zurich, we offer a sanctuary of healing, where
              Ayurvedic practices meet modern well being. Whether you are
              seeking relief from chronic ailments or merely wish to boost your
              energy, our Ayurvedic clinic generally stands ready to meet all
              your needs. Explore a holistic approach to health and wellness and
              step onto the path of balance and rejuvenation of body and mind.{" "}
            </p>
          </div>
          <img style={{}} className="mt-3 mb-3 homeContOneImg" src={homeBg} />
        </div>
        <div className="homeContTwo col-lg-5 col-md-10">
          <img style={{}} className="mt-3 mb-3 homeContTwoImg" src={homeBg} />

          <div className="aboutEshaa">
            <h3>
              Experience the enduring Benefits of Ayurveda: Path to Natural
              Wellness{" "}
            </h3>
            <p style={{ textIndent: "2em" }}>
              The many benefits of Ayurveda encompass both spiritual and
              physical in order to affect the equilibrium of the body as well as
              the mind.{" "}
            </p>
            <p style={{ textIndent: "2em" }}>
              Ayurveda - 5,000-year-old medical treatment has so many benefits
              in it as compared to the mere medical treatment, few of which
              include:{" "}
            </p>
            <p>
              <strong>Natural Healing: </strong>
              Ayurveda is the art and science of using herbs and oils and also
              many forms of therapies drawn from nature, in order to get
              recovered.
            </p>
            <p>
              <strong>Stress Reduction: </strong>
              Ayurvedic treatments promote mental serenity and clarity while
              lowering stress and anxiety.
            </p>
            <p>
              <strong>Holistic Wellness:</strong>
              Ayurveda focusses on total wellness by treating the underlying
              causes of many kinds of illnesses.
            </p>
            <p>
              <strong>Personalized Care: </strong>
              Each treatment plan is carefully designed around your unique dosha
              to achieve the full benefit of its array of advantages.
            </p>
          </div>
        </div>
      </div>

      <div className="divider w-full md:w-8/12 mx-auto"></div>

      <div className="ourTreatments ">
        <h2>{t("home.ourTreatments")}</h2>
        <p className="w-full md:w-7/12 mx-auto">{t("home.treatmentConts")}</p>
        <div className="treatmentOne treatments">
          <h3> {t("home.treatmentOne")}</h3>
          <div className="treatmentPoints">
            <p>{t("home.treatmentOneCont")}</p>
          </div>
        </div>
        <div className="treatmentTwo treatments">
          <h3>PRISTHABYANGA</h3>
          <p>
            Intervertebral disc regeneration &nbsp;&nbsp; | &nbsp;&nbsp;
            Lumbago&nbsp;&nbsp; | &nbsp;&nbsp; Back pain &nbsp;&nbsp; |
            &nbsp;&nbsp;Relieves muscle spasms and tension&nbsp;&nbsp; |
            &nbsp;&nbsp; Improves blood circulation, lymph flow and nervous
            system &nbsp;&nbsp;{" "}
          </p>
        </div>
        <div className="treatmentThree treatments">
          <h3>PADHABHYANGA</h3>
          <p>
            Eliminates cornea and cracks &nbsp;&nbsp; | &nbsp;&nbsp; Fatigue,
            numbness and stiffness &nbsp;&nbsp; | &nbsp;&nbsp; Improves vision
            &nbsp;&nbsp; | &nbsp;&nbsp; Relieves sleep disorders &nbsp;&nbsp; |
            &nbsp;&nbsp; Against nervousness &nbsp;&nbsp; | &nbsp;&nbsp; Buzz in
            the head
          </p>
        </div>
        <div className="treatmentFour treatments">
          <h3>PINDASVEDA</h3>
          <p>
            Good for movement restrictions &nbsp;&nbsp; | &nbsp;&nbsp; Muscle
            hardening&nbsp;&nbsp; | &nbsp;&nbsp; With swelling&nbsp;&nbsp; |
            &nbsp;&nbsp; Accumulations and deposits&nbsp;&nbsp; | &nbsp;&nbsp;
            Good for cellulite
          </p>
        </div>
      </div>

      <div className="galleryPreview w-full md:w-10/12 mx-auto">
        <h2>Gallery</h2>
        <h5>For your Ayurveda course program and your health</h5>
        <p>
          {" "}
          ABHYANGA &nbsp;&nbsp; / &nbsp;&nbsp; PRISTHABYANGA &nbsp;&nbsp; /
          &nbsp;&nbsp; PINDASVEDA &nbsp;&nbsp; / &nbsp;&nbsp;SAMPLE &nbsp;&nbsp;
          / &nbsp;&nbsp;SHIRO VASTHI
        </p>
        <ShuffleGrid />
      </div>

      <div className="divider w-full md:w-8/12 mx-auto"></div>

      <div className="priceList">
        <h4>Our Services</h4>
        <h2>Pamper Yourself and Get Relaxing </h2>
        <div className="emailContactForm mt-5 w-full md:w-10/12 mx-auto">
          <div className="emailFormContxt w-full md:w-5/12 mx-auto">
            <img
              src={pricelist}
              alt="#"
              className="h-[400px] w-[100%] lg:h-[80%] lg:w-[100%] mt-2"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="emailFormContxt mt-5 w-full md:w-6/12 mx-auto">
            <div className="treatmentList">
              {treatmentData.map((treatment, index) => (
                <React.Fragment key={index}>
                  <div className="treatmentContents">
                    <div className="treatContOne">
                      <h3>{treatment.name}</h3>
                      <h5>{treatment.duration}</h5>
                    </div>
                    <div className="treatContTwo">
                      <div className="horizontalDivider me-5"></div>
                      <h5>{treatment.price}</h5>
                    </div>
                  </div>
                  <div className="dividers w-full md:w-12/12 mx-auto"></div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
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
              id="name"
              type="text"
              name="name"
              placeholder="First Name"
              className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="name"
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
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="email"
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
              id="phone"
              type="tel"
              name="phone"
              placeholder="your phone"
              className="relative w-full h-10 px-10 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="phone"
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
              id="message"
              name="message"
              placeholder="your phone"
              className="relative w-full h-28 px-10 pt-2 pl-12 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="message"
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

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current!);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[950px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};
