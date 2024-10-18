import { useEffect } from "react";

import { FaChevronRight } from "react-icons/fa6";
// import { useTranslation } from "react-i18next";
import about1 from "../../assets/about/about1.png";
import about2 from "../../assets/about/about2.png";

import Glide from "@glidejs/glide";

import comp1 from "../../assets/about/comp1.png";
import comp2 from "../../assets/about/comp2.png";
import comp3 from "../../assets/about/comp3.png";
import comp4 from "../../assets/about/comp4.png";
import comp5 from "../../assets/about/comp5.png";
import comp6 from "../../assets/about/comp6.png";
import comp7 from "../../assets/about/comp7.png";
import comp8 from "../../assets/about/comp8.png";
import comp9 from "../../assets/about/comp9.png";

import vision from "../../assets/about/vision.png";
import mission from "../../assets/about/mission.png";

import "./About.css";

export default function About() {
  // const { t } = useTranslation("global");

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

      <div className="emailContactForm mt-5 w-full md:w-10/12 mx-auto">
        <div className="emailFormContxt w-full md:w-5/12 mx-auto">
          <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
            <figure className="flex-1 visImg">
              <img
                src={vision}
                alt="card image"
                className="object-cover aspect-auto"
              />
            </figure>
            <div className="flex-1 p-6 sm:mx-6 sm:px-0">
              <header className="flex gap-4 mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-slate-700">
                    Our Vision
                  </h3>
                </div>
              </header>
              <p>
                To become one of the most modern Ayurveda clinics in Zurich,
                both in intent and approach, focusing on holistic, personalized,
                and well-planned healthcare in line with the traditional spirit
                of Ayurveda.
              </p>
            </div>
          </div>
        </div>
        <div className="emailFormContxt w-full md:w-5/12 mx-auto">
          <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
            <figure className="flex-1 visImg">
              <img
                src={mission}
                alt="card image"
                className="object-cover aspect-auto"
              />
            </figure>
            <div className="flex-1 p-6 sm:mx-6 sm:px-0">
              <header className="flex gap-4 mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-slate-700">
                    Our Mission
                  </h3>
                </div>
              </header>
              <p>
                Eshaa Wellness seeks to guide people toward better health
                through professional guidance, therapeutic treatment, in a
                serene, soothing environment to enhance the balance of the mind,
                body, and spirit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="glidesCont"
        style={{ overflow: "hidden", padding: "50px 10px" }}
      >
        <h2>Health insurance companies recognized</h2>
        <div className="glide-09 relative w-full">
          {/* <!-- Slides --> */}
          <div data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <img
                  src={comp1}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp2}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp3}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp4}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp5}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp6}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp7}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp8}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src={comp9}
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
