import React, { useEffect } from "react";

import { FaChevronRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import about1 from "../../assets/about/about1.png";
import about2 from "../../assets/about/about2.png";

import Glide from "@glidejs/glide";

import "./About.css";

export default function About() {
  const { t } = useTranslation("global");

  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div>
      <div className="contactUs">
        <div className="contactUsHeader mt-5 w-full md:w-10/12 mx-auto">
          <h3>About Us</h3>
          <div className="breadCrumb">
            <span>Home</span>
            <FaChevronRight />
            <p>About Us</p>
          </div>
        </div>
        <div className="aboutUsContents">
          <div className="w-full md:w-6/12 mx-auto"></div>
          <div className="w-full md:w-6/12 mx-auto"></div>
        </div>
      </div>
      <div className="homeWelcomeContents row pb-5">
        <div className="homeContOne col-lg-5 col-md-10">
          <div className="welcomeEshaa">
            <h4 style={{ fontSize: "20px" }}>About Us</h4>
            <h3>
              Eshaa Wellness: Elevate Your Wellness Journey thorough Ayurveda{" "}
            </h3>
            <p style={{ textIndent: "2em" }}>
              Eshaa Wellness – An Ayurveda clinic that nurtures the integration
              of historical knowledge in Ayurveda with contemporary treatment
              methods for individuals' overall well-being. Established on a
              passion for holistic healing and with a strong conviction in the
              scope of Ayurveda, they seek to heal and empower people using
              traditional treatment methods inspired by Ayurvedic practices.
              Hence, the clinic seeks to recreate a soothing ambience that
              reconnects the body and mind into the lives of its clients. Learn
              the true meaning of Ayurveda through our therapies and energize
              the delicate balance of health and wellness in you.{" "}
            </p>
          </div>
          <img style={{}} className="mt-3 mb-3 homeContOneImg" src={about2} />
        </div>
        <div className="homeContTwo col-lg-5 col-md-10">
          <img style={{}} className="mt-3 mb-3 homeContTwoImg" src={about1} />

          <div className="aboutEshaa">
            <h3>Our approach: </h3>
            <p style={{ textIndent: "2em" }}>
              Eshaa Wellness embodies the integrated philosophy of one of the
              world's oldest medicines stemming from the Vedic lifestyle of
              India known as Ayurveda, or "science of life," it doesn't just
              cure an illness but strives for health and wholeness with
              happiness. We approach every individual with a unique adaptability
              to their constitution-Prakruti, where wellness is particular to
              each person, and any given treatment may not be suitable for all.
              That, in turn, is personalized care to ensure that we administer
              the best possible therapies tailored to your needs.{" "}
            </p>
            <p>
              <strong>Initial Consultation : </strong>
              Detailed analysis of the patient's pathological history, along
              with the symptoms present in the body, focusing on detailed dosha
              profiling.{" "}
            </p>
            <p>
              <strong>Diagnosis : </strong>
              Use of classical diagnostic tests to ascertain imbalances and
              identify the underlying reasons for their problems.{" "}
            </p>
            <p>
              <strong>Treatment Plan : </strong>
              Formulate a customized treatment plan, which could include herbal
              products, diet suggestions, or lifestyle changes.{" "}
            </p>
            <p>
              <strong>Therapeutic Sessions : </strong>
              Use treatments like Panchakarma, massage therapies, and special
              procedures to treat the patients based on the treatment plan.{" "}
            </p>
            <p>
              <strong>Follow-up Care : </strong>
              Frequent follow-up and evaluation, revision of the treatment plan,
              and recommendations for life long healthy lifestyle.
            </p>
          </div>
        </div>
      </div>

      <div className="glidesCont" style={{ overflow: "hidden" }}>
        <div className="glide-09 relative w-full">
          {/* <!-- Slides --> */}
          <div data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-1.svg"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-3.svg"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-4.svg"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-5.svg"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-6.svg"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
