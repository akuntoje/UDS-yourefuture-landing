import "@asu/unity-bootstrap-theme";

const HeroSection = ({
  backgroundImage = "",
  title = "",
  subtitle = "",
  buttons = [],
}) => {
  return (
    <div className="uds-hero-lg has-btn-row">
      <img
        className="hero"
        src={backgroundImage}
        alt="ASU campus hero image"
        fetchpriority="high"
        decoding="async"
      />
      <div className="hero-overlay"></div>
      <p className="hero-subtitle text-white">
        <span>{subtitle}</span>
      </p>
      <h1 className="text-white">
        <span>{title}</span>
      </h1>
      <div className="btn-row">
        {buttons.map((btn, i) => (
          <a
            key={i}
            role="button"
            className={`btn btn-${btn.color}`}
            href={btn.href}
            data-ga={btn.label}
            data-ga-name="onclick"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-type="internal link"
            data-ga-region="hero"
          >
            {btn.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
