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
            <h3>{t("home.treatmentTwo")}</h3>
            <p>{t("home.treatmentTwoCont")}</p>
          </div>
          <div className="treatmentThree treatments">
            <h3>{t("home.treatmentThree")}</h3>
            <p>{t("home.treatmentThreeCont")}</p>
          </div>
          <div className="treatmentFour treatments">
            <h3>{t("home.treatmentFour")}</h3>
            <p>{t("home.treatmentFourCont")}</p>
          </div>
          <div className="treatmentTwo treatments">
            <h3>{t("home.treatmentTwo")}</h3>
            <p>{t("home.treatmentTwoCont")}</p>
          </div>
          <div className="treatmentFour treatments">
            <h3>{t("home.treatmentFour")}</h3>
            <p>{t("home.treatmentFourCont")}</p>
          </div>
          <div className="treatmentThree treatments">
            <h3>{t("home.treatmentThree")}</h3>
            <p>{t("home.treatmentThreeCont")}</p>
          </div>
          <div className="treatmentFour treatments">
            <h3>{t("home.treatmentFour")}</h3>
            <p>{t("home.treatmentFourCont")}</p>
          </div>
          <div className="treatmentThree treatments">
            <h3>{t("home.treatmentThree")}</h3>
            <p>{t("home.treatmentThreeCont")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
