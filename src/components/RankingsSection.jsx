import "@asu/unity-bootstrap-theme";

const RankingsSection = ({ rankings = [] }) => {
  return (
    <section className="white-bg" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="container">
        <div className="row">
          {rankings.map((item, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3 mb-5">
              <h2 style={{ fontSize: "3rem", fontWeight: "700", lineHeight: "1.15" }}>
                <span className="highlight-gold">{item.heading}</span>
              </h2>
              <p className="mt-3" style={{ fontSize: "0.9rem", color: "#191919" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankingsSection;
