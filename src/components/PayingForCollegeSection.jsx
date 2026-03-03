import "@asu/unity-bootstrap-theme";

const PayingForCollegeSection = ({ heading = "", description = "", accolade = {}, cards = [] }) => {
  return (
    <section style={{ backgroundColor: "#191919" }}>
      {/* Top info row */}
      <div className="container pt-5 pb-4">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7 mb-4 mb-lg-0">
            <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "0.75rem" }}>
              <span className="highlight-gold">{heading}</span>
            </h2>
            <p style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: 0 }}>
              {description}
            </p>
          </div>
          <div className="col-12 col-lg-5 text-lg-end">
            <img
              src={accolade.imageUrl}
              alt={accolade.alt}
              loading="lazy"
              decoding="async"
              style={{ maxWidth: "280px", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Cards row */}
      <div className="container pb-5">
        <div className="row">
          {cards.map((card, i) => (
            <div key={i} className="col-12 col-md-4 mb-4">
              <div
                className="card"
                style={{ backgroundColor: "#ffffff", height: "100%", border: "1px solid #e8e8e8" }}
              >
                <div className="card-header pt-2">
                  <span
                    className={`${card.icon} fa-2x card-icon-top`}
                    aria-hidden="true"
                    style={{ color: "#191919" }}
                  ></span>
                </div>
                <div className="card-body">
                  <h3 className="card-title" style={{ fontSize: "1.1rem" }}>
                    <a
                      href={card.titleHref}
                      style={{ color: "#8C1D40", textDecoration: "none", fontWeight: "600" }}
                      data-ga={card.title}
                      data-ga-name="onclick"
                      data-ga-event="link"
                      data-ga-action="click"
                      data-ga-type="internal link"
                      data-ga-region="paying for college"
                    >
                      {card.title}
                    </a>
                  </h3>
                  <p className="card-text" style={{ fontSize: "0.9rem", color: "#191919" }}>
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PayingForCollegeSection;
