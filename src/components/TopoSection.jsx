import "@asu/unity-bootstrap-theme";

const TopoSection = ({ highlightedText = "", remainingText = "", subtext = "" }) => {
  return (
    <section style={{ position: "relative", backgroundColor: "#ffffff", minHeight: "280px", display: "flex", alignItems: "center" }}>
      {/* Topo pattern overlay — requires both .bg and .topo-white */}
      <div
        className="bg topo-white"
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
      <div className="container py-5" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="row">
          <div className="col-12 col-lg-9">
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                lineHeight: "1.2",
                marginBottom: "1.25rem",
                color: "#191919",
              }}
            >
              <span className="highlight-gold">{highlightedText}</span>
              {remainingText}
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#191919", marginBottom: 0 }}>{subtext}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopoSection;
