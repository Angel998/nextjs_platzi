import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import Link from "../common/link";

const Header = ({ pageTitle }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <title>{pageTitle}</title>
      </Head>

      <style global jsx>
        {`
          a {
            color: #333;
          }
        `}
      </style>

      <header>
        <nav>
          <div className="nav-wrapper blue darken-2">
            <div className="container">
              <a href="#" className="brand-logo">
                Logo
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link href="/" text="Inicio" />
                </li>
                <li>
                  <Link href="/canciones" text="Canciones" />
                </li>
                <li>
                  <Link href="/acerca_de" text="Acerca De" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

Header.defaultProps = {
  pageTitle: "Podcasts | A2H"
};

export default Header;
