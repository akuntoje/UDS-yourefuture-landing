import "@asu/unity-bootstrap-theme";

const StudyQuizSection = ({
  highlightedText = "",
  bodyText = "",
  linkText = "",
  linkSuffix = "",
  linkHref = "#",
}) => {
  return (
    <section style={{ backgroundColor: "#ffffff" }}>
      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="row">
          <div className="col-12 col-lg-7">
            <p style={{ fontSize: "1.1rem", fontWeight: "700", color: "#191919", marginBottom: "1rem" }}>
              <span className="highlight-gold">{highlightedText}</span>
              {" "}{bodyText}
            </p>
            <p style={{ fontSize: "1rem", color: "#191919", marginBottom: 0 }}>
              Take the{" "}
              <a
                href={linkHref}
                style={{ color: "#8C1D40", textDecoration: "underline", fontWeight: "600" }}
                data-ga={linkText}
                data-ga-name="onclick"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-type="internal link"
                data-ga-region="study quiz"
              >
                {linkText}
              </a>{" "}
              {linkSuffix}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyQuizSection;
