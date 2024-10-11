import comingsoon from "../../assets/appointment/comingsoon.png";

export default function About() {
  return (
    <div>
      <div className="emailContactForm mt-5 w-full md:w-12/12 mx-auto">
        <div className="emailFormContxt stayTuned w-full md:w-6/12 mx-auto">
          <h2>Coming Soon</h2>
          <p>This page is in progress... Stay tuned for updates...</p>
        </div>
        <div className="emailFormContxt w-full md:w-6/12 mx-auto imageContainer">
          <img src={comingsoon}
            style={{ blockSize: "100vh", objectFit: "cover", position: "fixed" }} />
        </div>
      </div>
    </div>
  )
}
