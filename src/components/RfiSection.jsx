import { AsuRfi } from "@asu/app-rfi";
import "@asu/unity-bootstrap-theme";

const RfiSection = ({
  heading,
  description,
  campus,
  studentType,
  variant,
  country,
  stateProvince,
  successMsg,
  test,
  submissionUrl,
  appPathFolder = "/app-rfi",
}) => {
  return (
    <section style={{ backgroundColor: "#8c1d40", padding: "48px 0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center mb-4">
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>{heading}</h2>
            {description && (
              <p style={{ color: "#fff", fontSize: "1.125rem" }}>{description}</p>
            )}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <AsuRfi
              campus={campus}
              studentType={studentType}
              variant={variant}
              country={country}
              stateProvince={stateProvince}
              successMsg={successMsg}
              test={test}
              submissionUrl={submissionUrl}
              appPathFolder={appPathFolder}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RfiSection;
