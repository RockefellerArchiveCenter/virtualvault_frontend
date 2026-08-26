import "./globals.css";
import Link from "next/link";

import Footer from "./components/Footer";
import MatomoTagManager from "./components/MatomoTagManager";

export default function Template({ children }) {
  return (
    <html lang="en">
      <head>
        <MatomoTagManager />
      </head>
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
              </div>
            </div>
          </header>
          <div className="container--full-width grid">
            <main id="main">{children}</main>
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}