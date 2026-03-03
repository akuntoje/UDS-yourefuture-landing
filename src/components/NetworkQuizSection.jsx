import "@asu/unity-bootstrap-theme";

const NetworkQuizSection = ({ bodyText = "", linkLabel = "", linkHref = "#" }) => {
  return (
    <section style={{ position: "relative", backgroundColor: "#ffffff", minHeight: "300px", display: "flex", alignItems: "center" }}>
      {/* Network-white pattern overlay — requires both .bg and .network-white */}
      <div
        className="bg network-white"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 1,
        }}
      ></div>
      <div className="container py-5" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          <div className="col-12 col-lg-6">
            <p style={{ fontWeight: "700", fontSize: "1rem", color: "#191919", marginBottom: "1rem" }}>
              {bodyText}
            </p>
            <a
              href={linkHref}
              style={{ color: "#8C1D40", fontWeight: "600", textDecoration: "underline" }}
              data-ga={linkLabel}
              data-ga-name="onclick"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-type="internal link"
              data-ga-region="main content"
            >
              {linkLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkQuizSection;
