import { useState } from "react";
import { token } from "./components/secrete/secrete";
import logo from "./components/images/logo.svg"
import illustration from "./components/images/illustration-working.svg"
import background1 from "./components/images/bg-shorten-desktop.svg"
import background2 from "./components/images/bg-boost-desktop.svg"
import brandLogo from "./components/images/icon-brand-recognition.svg"
import detailedLogo from "./components/images/icon-detailed-records.svg"
import customLogo from "./components/images/icon-fully-customizable.svg"
import fl from "./components/images/icon-facebook.svg"
import tl from "./components/images/icon-twitter.svg"
import pl from "./components/images/icon-pinterest.svg"
import il from "./components/images/icon-instagram.svg"

import "./App.css";

const img = (name) => `/images/${name}`;

async function shortenLink(originalLink) {
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ long_url: originalLink }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.description || data.message || "Request failed");
  }

  return data;
}

function Header() {
  return (
    <header>
      <nav id="navbar" role="navigation">
        <img id="logo" src={logo} alt="Shortly" />
        <ul id="nav-links">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <section id="head-links">
          <p className="head-btn" id="login">Login</p>
          <p className="head-btn" id="signup">Sign Up</p>
        </section>
      </nav>
      <button id="menu-btn" aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

function Hero() {
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

function ShortenForm({ onAdd }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const longUrl = value.trim();

    if (!longUrl) {
      setError("Please add a link");
      return;
    }
    setError("");

    try {
      const data = await shortenLink(longUrl);
      onAdd({ original: longUrl, short: data.link });
      setValue("");
    } catch (err) {
      console.error(err);
      alert(`Error: ${err.message}`);
    }
  }

  return (
    <section id="input-layer">
      <img id="input-bg" src={background1} alt="" />
    
        <form id="form" onSubmit={handleSubmit}>
          <input
            id="input-Field"
            className={error ? "error" : ""}
            type="url"
            placeholder="Shorten a link here..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button id="shorten-it">Shorten It!</button>
          <br></br>
          <p id="error-msg" className="error-msg">{error}</p>
        </form>
    </section>
  );
}

function LinkItem({ link }) {
  const [status, setStatus] = useState("copy"); // "copy" | "copied" | "failed"

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(link.short);
      setStatus("copied");
    } catch (err) {
      console.error("Copy failed:", err);
      setStatus("failed");
    }
    setTimeout(() => setStatus("copy"), 1500);
  }

  return (
    <li>
      {link.original} {link.short}{" "}
      <button
        type="button"
        className={`copy-btn ${status === "copied" ? "copied" : ""}`}
        onClick={handleCopy}
      >
        {status === "copied" ? "copied!" : status === "failed" ? "failed" : "copy"}
      </button>
    </li>
  );
}

function Features() {
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

function Boost() {
  return (
    <div id="slice">
      <img src={background2} alt="" />
      <div id="inner-slice">
        <h2>Boost your links today</h2>
        <p id="get-started2">Get Started</p>
      </div>
    </div>
  );
}

function Footer() {
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

export default function App() {
  const [linksList, setLinksList] = useState([]);

  const addLink = (link) => setLinksList((prev) => [...prev, link]);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <ShortenForm onAdd={addLink} />

        <div id="grey">
          <ul id="results">
            {linksList.map((link, i) => (
              <LinkItem key={`${link.short}-${i}`} link={link} />
            ))}
          </ul>
          <Features />
        </div>

        <Boost />
      </main>

      <Footer />
    </>
  );
}