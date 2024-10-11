import massage from "../../assets/home/massage.png";
import specialBath from "../../assets/home/bath.png";
import facial from "../../assets/home/facial.png";
import hydro from "../../assets/home/hydro.png";
import group from "../../assets/home/group.png";
import reflxology from "../../assets/home/reflxology.png";

import TreatmentCard from "../../pages/TreatmentCard";
import "./Home.css";
import homeBg from "../../assets/home/homeIntro.png";

// import logo1 from "../../assets/logo/1.png";

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
      <div className="homeWelcomeContents row">
        <div className="homeContOne col-lg-5 col-md-10">
          <div className="welcomeEshaa">
            <h3>Welcome to Eshaa Wellness! </h3>
            <p style={{ textIndent: "2em" }}>
              We believe in the exceptional potential of Ayurveda that can help
              restore all elements of the mind, body, and soul back to harmony.
              Nestled in Zurich, we offer a sanctuary of healing, where
              Ayurvedic practices meet modern well–being. Whether you are
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

      <div className="homePageWelcomeStats">
        <div className="statsContents"></div>
      </div>
    </div>
  );
}
