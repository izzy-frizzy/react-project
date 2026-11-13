import { useState } from "react";
import { token } from "./components/secrete/secrete";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {Boost} from "./components/Boost"
import {Features} from "./components/Features"
import { Footer } from "./components/Footer";
import background1 from "./components/images/bg-shorten-desktop.svg"
import "./App.css";

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
      <span className="original-link">{link.original}</span>
      <a className="short-link" href={link.short} target="_blank" rel="noreferrer">
        {link.short}
      </a>
      <button
        type="button"
        className={`copy-btn ${status === "copied" ? "copied" : ""}`}
        onClick={handleCopy}
      >
        {status === "copied" ? "Copied!" : status === "failed" ? "Failed" : "Copy"}
      </button>
    </li>
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