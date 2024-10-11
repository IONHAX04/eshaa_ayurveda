import React from "react";

import pricelist from "../../assets/home/pricelist.png";

import "./Price.css";


interface TreatmentList {
  name: string;
  duration: string;
  price: string;
}

export default function Price() {

  const treatmentData: TreatmentList[] = [
    { name: 'Whole Body', duration: '60 Mins', price: '150.00 CHF' },
    { name: 'Back', duration: '30 Mins', price: '120.00 CHF' },
    { name: 'Shirodhara', duration: '30 Mins', price: '120.00 CHF' },
    { name: 'Udwarthanam', duration: '60 Mins', price: '150.00 CHF' },
    { name: 'Njavara Kizhi', duration: '60 Mins', price: '150.00 CHF' },
    { name: 'Fussreflexzonen', duration: '30 Mins', price: '120.00 CHF' }
  ];


  return (
    <div className="price">
      <div className="priceList">
        <h4>Our Services</h4>
        <h2>Pamper Yourself and Get Relaxing </h2>
        <div className="emailContactForm mt-5 w-full md:w-10/12 mx-auto">
          <div className="emailFormContxt w-full md:w-5/12 mx-auto">
            <img src={pricelist} alt="#"
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

    </div>
  )
}
