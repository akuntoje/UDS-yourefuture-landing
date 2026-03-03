import "@asu/unity-bootstrap-theme";

const StudyHeroSection = ({ backgroundImage = "", title = "" }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: "550px",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* Subtle dark overlay for text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.15)",
          pointerEvents: "none",
        }}
      ></div>
      <div className="container pb-5" style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontSize: "3.5rem",
            fontWeight: "900",
            lineHeight: "1.1",
            marginBottom: 0,
          }}
        >
          <span className="highlight-gold">{title}</span>
        </h2>
      </div>
    </section>
  );
};

export default StudyHeroSection;
