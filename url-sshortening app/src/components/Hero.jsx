import illustration from "./images/illustration-working.svg"

export function Hero() {
  return (
    <div id="hero">
      <div id="hero-section">
        <h1>More than just shorter links</h1>
        <p id="hero-para">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <p id="get-started1">Get Started</p>
      </div>
      <img id="illustration" src={illustration} alt="" />
    </div>
  );
}
