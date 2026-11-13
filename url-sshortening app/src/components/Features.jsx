import brandLogo from "./images/icon-brand-recognition.svg"
import detailedLogo from "./images/icon-detailed-records.svg"
import customLogo from "./images/icon-fully-customizable.svg"

export function Features() {
  return (
    <>
      <div id="advanced-static">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <section id="cards">
        <div className="card" id="card1">
          <img id="brand" src={brandLogo} alt="" />
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div id="blue-line"></div>

        <div className="card" id="card2">
          <img id="detailed-records" src={detailedLogo} alt="" />
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className="card" id="card3">
          <img id="customizable" src={customLogo} alt="" />
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </section>
    </>
  );
}