import "./globals.css";
import Link from "next/link";

import Footer from "./components/Footer";

export default function Template({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Link href="#main" className="skip-link">
            Skip to main content
          </Link>
          <header className="header header--blue">
            <div className="wrapper">
              <div className="container flex header__container">
                <div className="header__brand header__brand--text">
                  <Link href="/" className="header__brand-title">
                    Virtual Vault
                  </Link>
                </div>
                <nav className="nav-right" aria-label="Main">
                  <div className="nav__list">
                    <div className="nav__item btn--navy">
                      <Link className="nav__link" href="/">
                        Search
                        <span className="material-icon" aria-hidden="true">
                          arrow_right_alt
                        </span>
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
          <div className="container grid">
            <main id="main">{children}</main>
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}