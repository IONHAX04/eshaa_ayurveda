import { FaChevronRight } from "react-icons/fa6";

import "./About.css";

export default function About() {
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
    </div>
  );
}
