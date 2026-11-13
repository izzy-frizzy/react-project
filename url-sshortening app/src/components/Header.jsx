import logo from "./images/logo.svg"

export function Header() {
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