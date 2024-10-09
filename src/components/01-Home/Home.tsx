import massage from "../../assets/home/massage.png";
import specialBath from "../../assets/home/bath.png";
import facial from "../../assets/home/facial.png";
import hydro from "../../assets/home/hydro.png";
import group from "../../assets/home/group.png";
import reflxology from "../../assets/home/reflxology.png";

import TreatmentCard from "../../pages/TreatmentCard";
import "./Home.css";

interface Treatment {
  image: string;
  title: string;
}

export default function Home() {
  const treatments: Treatment[] = [
    { image: massage, title: "Massage Therapy" },
    { image: specialBath, title: "Special Bath" },
    { image: facial, title: "Facial Treatment" },
    { image: hydro, title: "Hydrotherapy" },
    { image: group, title: "Group Therapy" },
    { image: reflxology, title: "Reflexology" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 justify-items-center">
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
    </div>
  );
}
