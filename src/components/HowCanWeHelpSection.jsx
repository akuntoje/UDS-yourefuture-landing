import "@asu/unity-bootstrap-theme";

const HowCanWeHelpSection = ({ heading = "", description = "", button = {} }) => {
  return (
    <section className="gray-faint-bg py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "1rem", color: "#191919" }}>
              {heading}
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#191919", marginBottom: "1.5rem" }}>
              {description}
            </p>
            <a
              role="button"
              className="btn btn-maroon"
              href={button.href}
              data-ga={button.label}
              data-ga-name="onclick"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-type="internal link"
              data-ga-region="how can we help"
            >
              {button.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCanWeHelpSection;
