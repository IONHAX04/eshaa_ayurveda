import { useTranslation } from "react-i18next";

import "./Treatments.css";

export default function Treatments() {
  const { t } = useTranslation("global");

  return (
    <div className="treat">
      <div className="treatmentsPage">
        <div className="ourTreatments ">
          <h2>{t("treatments.treatmentHeader")}</h2>
          <p className="w-full md:w-7/12 mx-auto">
            {t("treatments.treatmentCont")}
          </p>
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
              &nbsp;&nbsp; Relieves muscle spasms and tension&nbsp;&nbsp; |
              &nbsp;&nbsp; Improves blood circulation, lymph flow and nervous
              system
            </p>
          </div>
          <div className="treatmentThree treatments">
            <h3>PADHABHYANGA</h3>
            <p>
              Eliminates cornea and cracks &nbsp;&nbsp; | &nbsp;&nbsp; Fatigue,
              numbness and stiffness &nbsp;&nbsp; | &nbsp;&nbsp; Improves vision
              &nbsp;&nbsp; | &nbsp;&nbsp; Relieves sleep disorders &nbsp;&nbsp;
              | &nbsp;&nbsp; Against nervousness &nbsp;&nbsp; | &nbsp;&nbsp;
              Buzz in the head
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
      </div>
    </div>
  );
}
