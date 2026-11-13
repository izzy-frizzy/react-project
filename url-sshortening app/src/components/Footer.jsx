import fl from "./images/icon-facebook.svg"
import tl from "./images/icon-twitter.svg"
import pl from "./images/icon-pinterest.svg"
import il from "./images/icon-instagram.svg"

export function Footer() {
  return (
    <footer>
      <div id="foot">
        <h3>Shortly</h3>

        <section id="featured">
          <p className="white">Features</p>
          <p className="grey">Link Shortening</p>
          <p className="grey">Branded Links</p>
          <p className="grey">Analytics</p>
        </section>

        <section id="resources">
          <p className="white">Resources</p>
          <p className="grey">Blog</p>
          <p className="grey">Developers</p>
          <p className="grey">Support</p>
        </section>

        <section id="company">
          <p className="white">Company</p>
          <p className="grey">About</p>
          <p className="grey">Our Team</p>
          <p className="grey">Careers</p>
          <p className="grey">Contact</p>
        </section>

        <section id="logo-images">
          <img src={fl} alt="Facebook" />
          <img src={tl} alt="Twitter" />
          <img src={pl} alt="Pinterest" />
          <img src={il} alt="Instagram" />
        </section>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </footer>
  );
}